import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  serviceInterest: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    serviceInterest: "",
    message: "",
  });

  const { toast } = useToast();

  const submitContact = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        serviceInterest: "",
        message: "",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const requiredFields: (keyof ContactFormData)[] = ['firstName', 'lastName', 'email', 'serviceInterest', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field].trim());
    
    if (missingFields.length > 0) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit the contact form.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    submitContact.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "partners@celestiaholdings.co",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Montreal, Canada",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Let's Build Your Financial Future Together
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Ready to take your investment strategy to the next level? Our team of experts is here to help you navigate the complexities of modern finance and unlock new opportunities.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-0 rounded-lg shadow-2xl">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Contact Our Team
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    type="text" 
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="border-slate-200 focus:border-primary focus:ring-primary py-4 px-6 text-lg rounded-lg"
                    disabled={submitContact.isPending}
                  />
                  <Input 
                    type="text" 
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="border-slate-200 focus:border-primary focus:ring-primary py-4 px-6 text-lg rounded-lg"
                    disabled={submitContact.isPending}
                  />
                </div>
                
                <Input 
                  type="email" 
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-slate-200 focus:border-primary focus:ring-primary py-4 px-6 text-lg rounded-lg"
                  disabled={submitContact.isPending}
                />
                
                <Select 
                  value={formData.serviceInterest} 
                  onValueChange={(value) => handleInputChange('serviceInterest', value)}
                  disabled={submitContact.isPending}
                >
                  <SelectTrigger className="border-slate-200 focus:border-primary focus:ring-primary py-4 px-6 text-lg rounded-lg">
                    <SelectValue placeholder="Select Service Interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corporate-crypto-tax">Corporate Crypto Tax Consultation</SelectItem>
                    <SelectItem value="custom-saas-development">Custom SaaS Development</SelectItem>
                    <SelectItem value="asset-management-consulting">Asset Management Consulting</SelectItem>
                    <SelectItem value="web3-development">Web 3 Project Development</SelectItem>
                    <SelectItem value="partnership-accounting-firms">Partnership - Accounting Firms</SelectItem>
                    <SelectItem value="partnership-tech-companies">Partnership - Tech Companies</SelectItem>
                    <SelectItem value="partnership-legal-firms">Partnership - Legal Firms</SelectItem>
                    <SelectItem value="partnership-investment-funds">Partnership - Investment Funds</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                
                <Textarea 
                  placeholder="Tell us about your needs and goals..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={6}
                  className="border-slate-200 focus:border-primary focus:ring-primary py-4 px-6 text-lg rounded-lg resize-none"
                  disabled={submitContact.isPending}
                />
                
                <Button 
                  type="submit"
                  disabled={submitContact.isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold rounded-lg transition-all duration-200"
                >
                  {submitContact.isPending ? "Sending Message..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-12 grid md:grid-cols-2 gap-12 text-center max-w-2xl mx-auto">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="text-white">
                  <div className={`w-16 h-16 ${info.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="font-semibold text-white text-lg mb-2">{info.title}</div>
                  <div className="text-slate-300">{info.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
