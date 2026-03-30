import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Terminal, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('ERR_CONNECTION_REFUSED: Failed to transmit payload.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'muhammad.umair@example.com', href: 'mailto:muhammad.umair@example.com' },
    { icon: Phone, title: 'Phone', value: '+92 123 456 7890', href: 'tel:+921234567890' },
    { icon: MapPin, title: 'Location', value: 'Pakistan', href: '#' }
  ];

  return (
    <section id="contact" className="section bg-secondary relative border-t border-b border-border">
      <div className="max-w-6xl mx-auto font-mono">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="text-muted mb-6">
            <span className="text-accent">~/network</span> <span className="text-blue-400">./init_connection.sh</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-10 text-white"
          >
             Establish Connection
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form Terminal */}
            <motion.div variants={itemVariants} className="bg-primary rounded-lg border border-border shadow-xl overflow-hidden order-2 lg:order-1">
              <div className="bg-primary/50 border-b border-border px-4 py-2 flex items-center justify-between text-muted text-xs">
                <div className="flex items-center gap-2">
                  <Terminal size={14} /> 
                  <span>send_message.sh</span>
                </div>
              </div>

              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={40} />
                    <h4 className="text-lg font-bold text-green-400 mb-2">Message Transmitted!</h4>
                    <p className="text-muted text-sm">&gt; Connection response received. ACK OK.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <div className="bg-red-500/10 border border-red-500/50 p-3 rounded flex items-start gap-2 text-red-400 text-sm">
                        <AlertCircle size={16} className="mt-0.5" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div>
                      <label htmlFor="name" className="flex items-center text-white text-sm mb-2">
                        <span className="text-accent mr-2">❯</span> Enter Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-border focus:border-accent text-green-400 font-mono focus:outline-none transition-colors py-1 px-2"
                        placeholder="_"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="flex items-center text-white text-sm mb-2">
                        <span className="text-accent mr-2">❯</span> Enter Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-border focus:border-accent text-green-400 font-mono focus:outline-none transition-colors py-1 px-2"
                        placeholder="_"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="flex items-center text-white text-sm mb-2">
                        <span className="text-accent mr-2">❯</span> Enter Message Payload:
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full bg-transparent border-b border-border focus:border-accent text-green-400 font-mono focus:outline-none transition-colors py-1 px-2 resize-none mt-1"
                        placeholder="..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 bg-secondary border border-border text-white font-bold hover:bg-accent/20 hover:border-accent transition-colors ${
                        isSubmitting ? 'opacity-50 cursor-wait' : ''
                      }`}
                      whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse flex items-center justify-center gap-2">
                          <Terminal size={16} /> Executing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Terminal size={16} /> Execute Send
                        </span>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8 order-1 lg:order-2 lg:pl-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Network Protocols</h3>
                <p className="text-muted text-sm leading-relaxed mb-8">
                  Available through standard communication protocols. Response times generally swift during standard operating cycles.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 border border-border bg-primary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="text-accent group-hover:text-green-400 transition-colors">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold mb-1">{info.title}</h4>
                      <p className="text-muted text-sm group-hover:text-white transition-colors">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <div className="pt-8 border-t border-border/50">
                 <div className="text-muted text-xs">
                    // Ready to receive incoming connections...
                 </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;