import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const title = "Path"
export const description = "The Quicksort path style: Martian Mono at 12px, written like a file path. Good above articles and docs."
export const order = 2

export default function BreadcrumbPath() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-0 font-mono text-xs">
        <BreadcrumbItem><BreadcrumbLink href="#">~/quicksort.fr</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator className="px-0.5" />
        <BreadcrumbItem><BreadcrumbLink href="#">blog</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator className="px-0.5" />
        <BreadcrumbItem><BreadcrumbPage className="font-normal">insight</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
