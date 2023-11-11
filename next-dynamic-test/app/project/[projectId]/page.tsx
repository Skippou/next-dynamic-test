"use client";
import { useParams } from "next/navigation";
interface PageProps {
  params: { projectId: string };
}
export default function Page({ params }: PageProps) {
    const useThisParam = useParams<{ projectId: string }>();
  return <p className="text-white bg-black">TESTING{useThisParam?.projectId } {params?.projectId} Hi</p>;
}
export const dynamicParams = true
export const revalidate = false
export const dynamic = 'force-dynamic'
