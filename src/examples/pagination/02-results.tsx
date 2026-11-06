import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export const title = "Under a list"
export const description = "With a result count, as under the insights archive."
export const order = 2

export default function PaginationResults() {
  return (
    <div className="flex w-[640px] max-w-full items-center justify-between gap-6 border-t border-border pt-4">
      <span className="num text-xs text-muted-foreground">13–24 of 58 insights</span>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
          <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#">5</PaginationLink></PaginationItem>
          <PaginationItem><PaginationNext href="#" /></PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
