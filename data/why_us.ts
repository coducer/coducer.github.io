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
			'Our process is a proven and customised approach designed specifically for Non-tech SaaS founders. We offer comprehensive tech assistance to ensure your success in navigating the complexities in tech world.',
		icon: GiProcessor
	},
	{
		name: 'Scale',
		description: 'We help you accelerate your growth rate by scaling up your tech capabilities like handling customer requests, enhancing resources & infrastructure and effectively managing increased workloads.',
		icon: BiExpand
	},
	{
		name: 'Support',
		description: 'As your tech arm, we support decision-making, interactions with investors/customers, and serve as your knowledge partner for product and tech related resources.',
		icon: MdContactSupport
	},
	{
		name: 'Opensource',
		description: 'Open Source empowers us to customise tools based on unique requirements, ensuring each product is distinctive, while Proprietary Tools are utilised when necessary.',
		icon: DiOpensource
	}
];
