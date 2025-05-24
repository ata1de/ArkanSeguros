import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Separator } from "@/components/ui/separator"
import { LeadType } from "@/types/leads"
import { FormattedDate } from "@/utils/FormattedDate"
import { CalendarDays, User2 } from "lucide-react"

interface DemandCardProps {
  client: LeadType

}

const DemandCard = ({ client }: DemandCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className="cursor-pointer hover:underline">
        <p className="truncate max-w-[120px]">{client.demand}</p>
      </HoverCardTrigger>
      <HoverCardContent className="bg-DarkBlue border-2 max-h-[500px] max-w-[500px] border-WhiteDefault text-WhiteDefault">
          <div className="flex flex-col justify-center items-start">
            <div className="flex justify-center items-center">
              <User2 className="mr-2 h-4 w-4 opacity-70" />
              <h4 className="text-sm font-semibold">{client.name}</h4>
            </div>
            <Separator className="my-3 bg-gray-400" />
            <p className="text-sm mb-3">
              {client.demand}
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                {FormattedDate(client.createdAt)}
              </span>
            </div>
          </div>
      </HoverCardContent>
  </HoverCard>
  )
}

export default DemandCard;