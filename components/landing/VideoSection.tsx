import { cn } from "@/lib/utils"

interface VideoSectionProps {
    title: string
    description: string
    videoUrl: string
    align?: "left" | "right"
    className?: string
    badge?: string
}

export function VideoSection({
                                 title,
                                 description,
                                 videoUrl,
                                 align = "left",
                                 className,
                                 badge
                             }: VideoSectionProps) {
    return (
        <section className={cn("w-full py-12 md:py-24 lg:py-32", className)}>
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <div className={cn(
                    "grid gap-8 lg:grid-cols-2 lg:gap-12 items-center",
                    align === "right" ? "lg:grid-flow-col-dense" : ""
                )}>
                    {/* Content Column */}
                    <div className={cn("space-y-4", align === "right" ? "lg:col-start-2" : "")}>
                        {badge && (
                            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                                {badge}
                            </div>
                        )}
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            {title}
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Video Column */}
                    <div className={cn(
                        "mx-auto w-full lg:max-w-none",
                        align === "right" ? "lg:col-start-1" : ""
                    )}>
                        <div className="relative aspect-video overflow-hidden rounded-xl border border-border shadow-xl bg-muted">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={videoUrl}
                                title={title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}