import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export const title = "Review workspace"
export const description = "A hairline handle with a small grip. Drag it, or focus it and use the arrow keys."
export const order = 1

export default function ResizableDefault() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-[320px]! w-[720px]! max-w-full rounded-lg border border-border bg-background">
      <ResizablePanel defaultSize="38%" minSize="20%">
        <div className="grid h-full content-start gap-3 p-5">
          <span className="label-mono">Source file</span>
          <p className="text-sm text-muted-foreground">Annual accounts 2025, Maison Lefèvre SAS. 84 pages, uploaded 3 Nov.</p>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="62%" minSize="30%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="60%">
            <div className="grid h-full content-start gap-3 p-5">
              <span className="label-mono">Draft credit note</span>
              <p className="text-[15px]">Revenue up 8% to €42.1m; net debt down to 1.9× EBITDA. Recommend renewal of the €6m facility on current terms.</p>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="40%">
            <div className="grid h-full content-start gap-3 p-5">
              <span className="label-mono">Reviewer notes</span>
              <p className="text-sm text-muted-foreground">Check covenant on page 61 before committee.</p>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
