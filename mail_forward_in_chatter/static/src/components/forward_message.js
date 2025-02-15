/** @odoo-module **/
import { rpc } from "@web/core/network/rpc";
import { _t } from "@web/core/l10n/translation";
import { messageActionsRegistry } from "@mail/core/common/message_actions";
import { useService } from "@web/core/utils/hooks";

async function forwardMessage(message, actionService) {
    console.log("Forwarding message:", message);

    try {
        const action = await rpc('/web/dataset/call_kw', {
            model: 'mail.message',
            method: 'action_wizard_forward',
            args: [message.id],
            kwargs: {},
        });

        console.log("Action received:", action);

        if (action) {
            actionService.doAction(action);  // ✅ Execute the action to open the form
        } else {
            console.error("No action returned from the server.");
        }

    } catch (error) {
        console.error("Error forwarding message:", error);
    }
}

// Register the action
messageActionsRegistry.add("forward_message", {
    condition: () => true,
    icon: "fa fa-forward",
    title: () => _t("Forward Message"),
    onClick(event) {
        const actionService = event.env.services.action;  // ✅ Correct way to get action service
        const message = event.props.message;
        forwardMessage(message, actionService); // ✅ Pass actionService
    },
    sequence: 0,
});
