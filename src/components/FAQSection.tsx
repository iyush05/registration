import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who can attend the event?",
      answer: "The event is open to all students interested in technology and development, regardless of their experience level. Whether you're a beginner or an experienced developer, you're welcome to join!"
    },
    {
      question: "Is registration free?",
      answer: "Yes! Registration is completely free. We believe in making technology education accessible to everyone."
    },
    {
      question: "Do I need to bring my laptop?",
      answer: "Yes, please bring your laptop as we'll have hands-on coding sessions and workshops that require a computer."
    },
    {
      question: "What technologies will be covered?",
      answer: "We'll cover a variety of technologies including Flutter, Firebase, Web Technologies, Cloud Computing, and more. The specific topics will be announced closer to the event date."
    }
  ];

  return (
    <section id="faqs" className="py-20 relative floating-dots">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
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