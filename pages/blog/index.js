import AppLayout from '../../core/layout/AppLayout';
import BlogCardsContainer from './components/BlogCardsContainer';
import BlogHeader from './components/BlogHeader';

// Dummy data to represent how data will be represented after API call
const dummyPostsData = [
	{
		id: 1,
		title: 'Tech Malawi: The Future is now',
		slug: 'tech-malawi-the-future-is-now',
		postImage: '/blog-hero-open-book.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque dolore officiisrecusandae ab nam eos explicabo.',
		body: '',
		date: '7 August, 2022',
		tags: ['Tech', 'Malawi'],
	},
	{
		id: 2,
		title: 'Tech Malawi Community Launches Website',
		slug: 'tech-malawi-community-launches-website',
		postImage: '/blog-hero-open-book.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam eos explicabo ab nam eos explicabo ab nam eos explicaboab nam eos explicabo',
		body: '',
		date: '6 August, 2022',
		tags: ['Tech', 'Next.js'],
	},
	{
		id: 3,
		title: 'The Buga of Malawian Tech',
		slug: 'the-buga-of-malawian-tech',
		postImage: '/blog-hero-open-book.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque dolore officiisrecusandae ab nam eos explicabo.',
		body: '',
		date: '4 August, 2022',
		tags: ['Tech', 'Innovation'],
	},
];

const Blog = () => (
	<AppLayout>
		<BlogHeader />
		<BlogCardsContainer dummyPostsData={dummyPostsData} />
	</AppLayout>
);

export default Blog;
