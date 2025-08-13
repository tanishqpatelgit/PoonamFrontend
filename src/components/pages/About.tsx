import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Users, Award, Truck, Shield, Target, Heart, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years in Business", value: "25+", icon: Award },
    { label: "Parts in Stock", value: "10,000+", icon: Target },
    { label: "Happy Customers", value: "2,500+", icon: Users },
    { label: "Same-Day Dispatch", value: "95%", icon: Truck },
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "We source only from certified manufacturers and test every component to ensure reliability and performance."
    },
    {
      icon: Zap,
      title: "Technical Excellence",
      description: "Our qualified engineers provide expert advice and support to help you find the perfect solution."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your success is our priority. We build lasting relationships through exceptional service and support."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "With our extensive UK stock and logistics network, we deliver when you need it most."
    },
  ];

  const team = [
    {
      name: "James Mitchell",
      role: "Managing Director",
      experience: "20+ years in industrial supply",
      specialization: "Strategic partnerships & business development"
    },
    {
      name: "Sarah Thompson",
      role: "Technical Director",
      experience: "15+ years mechanical engineering",
      specialization: "Motor systems & drive technology"
    },
    {
      name: "David Chen",
      role: "Procurement Manager",
      experience: "12+ years supply chain",
      specialization: "Supplier relationships & quality control"
    },
    {
      name: "Emma Wilson",
      role: "Customer Success Manager",
      experience: "8+ years customer service",
      specialization: "Technical support & customer relations"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-section mb-4">About IndustrialParts</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For over 25 years, we've been the trusted partner for industrial components, 
            serving manufacturers, maintenance teams, and engineers across the UK with 
            quality parts and exceptional service.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} className="card-industrial text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-section mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1998 by mechanical engineer James Mitchell, IndustrialParts 
                began as a small supplier serving local manufacturing companies in Manchester. 
                What started as a mission to provide reliable, quality components has grown 
                into one of the UK's most trusted industrial parts suppliers.
              </p>
              <p>
                Today, we stock over 10,000 components from world-leading manufacturers, 
                serving customers across the UK and Europe. Our team of qualified engineers 
                and technical specialists ensures that every customer receives not just the 
                right part, but the right solution for their specific application.
              </p>
              <p>
                We've built our reputation on three core principles: uncompromising quality, 
                technical expertise, and exceptional customer service. These values continue 
                to drive everything we do as we help our customers keep their operations 
                running smoothly and efficiently.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="card-industrial">
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the most trusted partner for industrial components, providing 
                  quality parts, expert technical support, and exceptional service that 
                  keeps British industry moving forward.
                </p>
              </CardContent>
            </Card>

            <Card className="card-industrial">
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To revolutionize industrial procurement through technology, expertise, 
                  and relationships, making it easier than ever for engineers and 
                  maintenance teams to find exactly what they need, when they need it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-section text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="card-industrial text-center">
                <CardContent className="p-6">
                  <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-section text-center mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="card-industrial">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                      <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                      <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                      <p className="text-sm text-muted-foreground">{member.specialization}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Card className="card-industrial">
          <CardHeader>
            <CardTitle className="text-center">Certifications & Partnerships</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <Badge variant="outline" className="mb-2">ISO 9001:2015</Badge>
                <p className="text-xs text-muted-foreground">Quality Management</p>
              </div>
              <div>
                <Badge variant="outline" className="mb-2">ISO 14001:2015</Badge>
                <p className="text-xs text-muted-foreground">Environmental Management</p>
              </div>
              <div>
                <Badge variant="outline" className="mb-2">CHAS Approved</Badge>
                <p className="text-xs text-muted-foreground">Health & Safety</p>
              </div>
              <div>
                <Badge variant="outline" className="mb-2">FORS Bronze</Badge>
                <p className="text-xs text-muted-foreground">Fleet Operator Recognition</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;