import Link from 'next/link';

export default function RootPage() {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center gap-4 font-pretendard">
			Root Page
			<Link href="/test" className="text-blue-500 underline">
				Move To Test Page
			</Link>
		</div>
	);
}
