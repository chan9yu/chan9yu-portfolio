import Link from 'next/link';

export default function TestPage() {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center gap-4 font-pretendard">
			Test Page
			<Link href="/" className="text-blue-500 underline">
				Move To Root Page
			</Link>
		</div>
	);
}
