
{
    "name": "Mail Forward Message - Odoo 18",
    "version": "18.0.1",
    "summary": "Forward messages from the chatter message.",
    "author": "bharathikannan17656@gmail.com",
    "depends": ["mail", "contacts"],
    "data": [
       
    ],
    "assets": {
        "web.assets_backend": [
            "mail_forward/static/src/components/forward_message.js",       
        ],  
    },
    "installable": True,
    "auto_install": False,
    "license": "AGPL-3",
}
