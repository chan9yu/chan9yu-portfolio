import Link from 'next/link';

export default function NavSidebar() {
	return (
		<div className="absolute flex h-full w-80 flex-col gap-10 bg-gray-100 p-8">
			<div className="text-4xl">Logo</div>
			<nav className="flex flex-col gap-4">
				<Link href="/">Home</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/skills">Skills</Link>
				<Link href="/experience">Experience</Link>
				<Link href="/contact">Contact</Link>
			</nav>
		</div>
	);
}
