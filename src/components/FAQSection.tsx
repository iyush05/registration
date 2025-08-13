import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who can join GDG in the second-year recruitment drive?",
      answer: "Any second-year student passionate about technology, development, or community work can apply. You do not need to be an expert — just have the willingness to learn and contribute."
    },
    {
      question: "What roles or responsibilities will I have after joining?",
      answer: "Members will work on organizing tech events, workshops, and hackathons, collaborate on projects, and help grow the community through outreach and innovation."
    },
    {
      question: "Do I need prior technical experience to join?",
      answer: "No, prior experience is not mandatory. GDG values curiosity, teamwork, and a growth mindset over skill level. We provide learning opportunities and mentorship."
    },
    {
      question: "How is the recruitment process structured?",
      answer: "The process usually includes an application form, a short technical or creative task, and an interaction round to understand your skills, interests, and motivation."
    }
  ];

  return (
    <section id="faqs" className="py-20 relative floating-dots">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-gradient rounded-2xl px-6 border-border/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;