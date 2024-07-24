import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ServiceQuestions } from "@/data/questionsServices"
import { MessageCircleQuestion } from "lucide-react"
  
  export function AccordionService(questionsServices: ServiceQuestions) {
    return (
      <Accordion type="single" collapsible className="w-full max-w-[1290px] text-WhiteDefault">
        {questionsServices.questions.map((question, index) => (
            <AccordionItem key={`item-${index}`} value={`item-${index}`} className="bg-MediumBlue shadow-md rounded-xl p-3 mb-3" >
                <AccordionTrigger><span className="flex justify-center items-center text-lg font-bold"><MessageCircleQuestion className="w-5 h-5 mr-3 text-Yellow"/>{question.question}</span></AccordionTrigger>
                <AccordionContent className="text-base font-normal text-gray-400 max-[1290px]:max-w-[400px]">
                  <p className="">{question.answer}</p>
                </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }
  