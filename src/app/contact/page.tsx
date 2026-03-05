import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ChevronDown } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const ContactPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Contact Info */}
          <motion.div 
            {...sectionVariants}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <Badge variant="primary">Contact Us</Badge>
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight">Get in Touch</h1>
              <p className="text-text-muted text-lg leading-relaxed max-w-xl">
                Have a question about our products or your order? Our dedicated USA-based support team is here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
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
                  className="flex gap-5"
                >
                  <div className={`w-14 h-14 bg-${item.color}/10 rounded-2xl flex items-center justify-center text-${item.color} shrink-0 shadow-sm`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    {item.content.map((c, i) => <p key={i} className="text-text-muted text-sm">{c}</p>)}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Map UI Placeholder */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="w-full h-72 bg-muted/10 rounded-[32px] border border-muted/20 flex items-center justify-center overflow-hidden relative shadow-soft"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')] bg-cover opacity-30 grayscale" />
              <div className="relative z-10 text-center space-y-3">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto shadow-medium">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <p className="font-medium text-text-main">Interactive Map Loading...</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            {...sectionVariants}
            viewport={{ once: true }}
            transition={{ ...sectionVariants.transition, delay: 0.2 }}
            className="w-full"
          >
            <Card className="p-8 md:p-16 rounded-[40px] shadow-medium border-muted/5">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Input label="First Name" placeholder="John" className="h-14" />
                  <Input label="Last Name" placeholder="Doe" className="h-14" />
                </div>
                <div className="grid grid-cols-1 gap-8">
                  <Input label="Email Address" placeholder="john@example.com" type="email" className="h-14" />
                  <Input label="Phone Number" placeholder="+1 (555) 000-0000" className="h-14" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-main ml-1">Message</label>
                  <textarea 
                    className="w-full px-5 py-4 bg-surface border border-muted/20 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-muted/50 min-h-[180px] text-base"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button size="lg" className="w-full h-16 text-lg gap-3 rounded-2xl shadow-lg shadow-primary/20">
                  <Send className="w-5 h-5" /> Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
        
        {/* FAQ Section */}
        <motion.section 
          {...sectionVariants}
          viewport={{ once: true }}
          className="mt-40 max-w-4xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <Badge variant="secondary">Support Center</Badge>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Frequently Asked Questions</h2>
            <p className="text-text-muted text-lg">Quick answers to common questions about our services.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`group border rounded-3xl transition-all duration-300 ${
                  activeFaq === i 
                    ? 'bg-surface border-primary/20 shadow-medium' 
                    : 'bg-background border-muted/10 hover:border-muted/30'
                }`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      activeFaq === i ? 'bg-primary text-white' : 'bg-muted/5 text-primary group-hover:bg-primary/10'
                    }`}>
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-lg md:text-xl font-medium text-text-main">{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted transition-transform duration-300 ${
                    activeFaq === i ? 'rotate-180 text-primary' : ''
                  }`} />
                </button>
                
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 ml-14">
                        <p className="text-text-muted text-base md:text-lg leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default ContactPage;
