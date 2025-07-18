const rules = {
	user: {
		static: [],
	},

	supervisor: {
		static: [
			"drawer-admin-items:view",
			"tickets-manager:showall",
			"connections-page:actionButtons",
		],
	},

	admin: {
		static: [
			//"dashboard:view",
			"drawer-admin-items:view",
			"tickets-manager:showall",
			"user-modal:editProfile",
			"user-modal:editQueues",
			"ticket-options:deleteTicket",
			"contacts-page:deleteContact",
			"connections-page:actionButtons",
			"connections-page:addConnection",
			"connections-page:editOrDeleteConnection"
		],
	},
};

export default rules;
