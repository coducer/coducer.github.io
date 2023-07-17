import { BiSolidTimer } from 'react-icons/bi';
import { AiOutlineTeam } from 'react-icons/ai';
import { GiProcessor } from 'react-icons/gi';
import { BiExpand } from 'react-icons/bi';
import { MdContactSupport } from 'react-icons/md';
import { DiOpensource } from 'react-icons/di';


export const whyUsData = [
	{
		name: 'Time',
		description:
			'We are with you every step of the way, starting from day -30, assisting you with requirements, proposals, detailed analysis, timeframes, and most of all in defining the core MVP features.',
		icon: BiSolidTimer
	},
	{
		name: 'Team',
		description:
			'Collaborate with experienced tech entrepreneurs, backed by project managers, designers, and test engineers who support your vision.',
		icon: AiOutlineTeam
	},
	{
		name: 'Process',
		description:
			'Our process is a proven and customised approach designed specifically for Non-tech SaaS founders. We offer comprehensive tech assistance to ensure your success in navigating the complexities of the tech world.',
		icon: GiProcessor
	},
	{
		name: 'Scale',
		description: 'We help you accelerate your tech growth rate by scaling up your tech capabilities. This includes handling customer requests, enhancing your technological resources and infrastructure, as well as effectively managing increased workloads, user base, and emerging market opportunities.',
		icon: BiExpand
	},
	{
		name: 'Support',
		description: 'As your tech arm, we support decision-making, interactions with investors/customers, and serve as your knowledge partner for product and tech related resources.',
		icon: MdContactSupport
	},
	{
		name: 'Opensource',
		description: 'Open Source empowers us to customise tools based on unique requirements, ensuring each product is distinctive, while Proprietary Tools are utilised when necessary. Our core goal is to deliver exceptional products that resonate with users and bring value to their lives.',
		icon: DiOpensource
	}
];
