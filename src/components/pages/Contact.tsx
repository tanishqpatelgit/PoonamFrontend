import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useToast } from "../hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Quote Request Sent",
      description: "We'll get back to you within 24 hours with a detailed quote.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+44 20 7123 4567", "+44 20 7123 4568 (Technical)"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sales@industrialparts.co.uk", "technical@industrialparts.co.uk"]
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Industrial Estate", "Manchester, M1 2AB", "United Kingdom"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-section mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our technical experts for quotes, product information, 
            or engineering support. We're here to help with your industrial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="card-industrial">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start space-x-3">
                    <item.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      {item.details.map((detail, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="card-industrial">
              <CardHeader>
                <CardTitle>Emergency Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Need urgent technical support or have a breakdown? 
                  Our emergency hotline is available 24/7.
                </p>
                <Button className="w-full btn-industrial">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quote Request Form */}
          <div className="lg:col-span-2">
            <Card className="card-industrial">
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Enter company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Inquiry Type *</Label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                      <SelectTrigger id="inquiry-type">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quote">Product Quote</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="bulk">Bulk Order</SelectItem>
                        <SelectItem value="custom">Custom Solution</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please provide details about your requirements, including part numbers, quantities, specifications, or any technical questions..."
                    />
                  </div>

                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">For faster quotes, please include:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Part numbers or model numbers</li>
                      <li>• Required quantities</li>
                      <li>• Delivery timeline</li>
                      <li>• Application details</li>
                    </ul>
                  </div>

                  <Button type="submit" className="w-full btn-industrial" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;