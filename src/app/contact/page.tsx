import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const ContactPage = () => {
  const sectionVariants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const faqs = [
    { q: 'What is your shipping policy?', a: 'We offer free express shipping on all orders over $150 within the continental USA. Standard shipping takes 3-5 business days.' },
    { q: 'How do I return a product?', a: 'You can return any product within 30 days of purchase. Simply contact our support team to receive a prepaid return label.' },
    { q: 'Do you offer international shipping?', a: 'Currently, we only ship within the USA. We are planning to expand to Canada and Europe later this year.' },
    { q: 'What warranty do you provide?', a: 'All LAZAK products come with a standard 2-year manufacturer warranty covering any technical defects.' }
  ];

  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div 
            {...sectionVariants}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <Badge variant="primary">Contact Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
              <p className="text-text-muted text-lg">
                Have a question about our products or your order? Our dedicated USA-based support team is here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Mail, title: "Email Us", content: ["support@nexus.com", "sales@nexus.com"], color: "primary" },
                { icon: Phone, title: "Call Us", content: ["+1 (800) 123-4567", "Mon-Fri, 9am-6pm EST"], color: "secondary" },
                { icon: MapPin, title: "Visit Us", content: ["123 Tech Plaza", "Silicon Valley, CA 94025"], color: "accent" },
                { icon: Clock, title: "Response Time", content: ["Under 2 hours", "During business hours"], color: "purple-500" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center text-${item.color} shrink-0`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    {item.content.map((c, i) => <p key={i} className="text-text-muted text-sm">{c}</p>)}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Map UI Placeholder */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="w-full h-64 bg-muted/10 rounded-2xl border border-muted/20 flex items-center justify-center overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')] bg-cover opacity-30 grayscale" />
              <div className="relative z-10 text-center space-y-2">
                <MapPin className="w-10 h-10 text-primary mx-auto" />
                <p className="font-bold">Interactive Map Loading...</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            {...sectionVariants}
            viewport={{ once: true }}
            transition={{ ...sectionVariants.transition, delay: 0.2 }}
          >
            <Card className="p-8 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input label="First Name" placeholder="John" />
                  <Input label="Last Name" placeholder="Doe" />
                </div>
                <Input label="Email Address" placeholder="john@example.com" type="email" />
                <Input label="Phone Number" placeholder="+1 (555) 000-0000" />
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-text-main ml-1">Message</label>
                  <textarea 
                    className="w-full px-4 py-2.5 bg-surface border border-muted/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-main placeholder:text-muted/50 min-h-[150px]"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button size="lg" className="w-full gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
        
        {/* FAQ Section */}
        <motion.section 
          {...sectionVariants}
          viewport={{ once: true }}
          className="mt-32 space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-text-muted">Quick answers to common questions about our services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-3 p-6 bg-surface rounded-xl border border-muted/10"
              >
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" /> {faq.q}
                </h3>
                <p className="text-text-muted leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default ContactPage;
