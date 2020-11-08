import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilityStyle from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilityStyle.headingMd}>
				<p>
					I am a software developer who wants to learn about new technologies
				</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
				</p>
			</section>
			<section
				className={`${utilityStyle.headingMd} ${utilityStyle.padding1px}`}>
				<h2 className={utilityStyle.headingLg}>Blog</h2>
				<ul className={utilityStyle.list}>
					{allPostData.map(({ id, date, title }) => (
						<li className={utilityStyle.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilityStyle.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export const getStaticProps = async () => {
	const allPostData = getSortedPostsData();
	return {
		props: {
			allPostData,
		},
	};
};
