module.exports = {
	newMember : {
		nMemberId: {
			type: Number,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		job: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		pictureUrl: {
			type: String,
			required: false
		},
		summary: {
			type: String,
			required: true
		},
		introdution: {
			type: String,
			required: true
		},
		project: {
			type: String,
			required: false
		},
		book: {
			type: String,
			required: false
		},
		honor: {
			type: String,
			required: false
		}
	},
	oldMember: {
		oMemberId: {
			type: Number,
			required: true
		},
		year: {
			type: Number,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		pictureUrl: {
			type: String,
			required: true
		},
		summary: {
			type: String,
			required: true
		}
	},
	oMemberIntro: {
		introId: {
			type: Number,
			required: true
		},
		year: {
			type: Number,
			required: true
		},
		introdution: {
			type: String,
			required: true
		}
	},
	graduate: {
		graduateId: {
			type: Number,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		pictureUrl: {
			type: String,
			required: true
		},
		studyContent: {
			type: String,
			required: true
		}
	},
	studyActivity: {
		activityId: {
			type: Number,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		author: {
			type: String,
			required: true
		},
		date: {
			type: String,
			required: true
		},
		pictureUrl: {
			type: String,
			required: false
		},
		summary: {
			type: String,
			required: true
		},
		detail: {
			type: String,
			required: true
		},
		resourceUrl: {
			type: String,
			required: false
		}
	},
	studyTrends: {
		trendsId: {
			type: Number,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		date: {
			type: String,
			required: true
		},
		author: {
			type: String,
			required: true
		},
		summary: {
			type: String,
			required: true
		},
		detail: {
			type: String,
			required: true
		}
	}
};