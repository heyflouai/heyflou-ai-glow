import { SEOHead } from '@/components/ui/seo-head';

const Calculator = () => {
  return (
    <>
      <SEOHead 
        title="HeyFlou Calculator"
        description="Internal pricing calculator for custom automation builds."
        noIndex={true}
      />
      
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Internal Tool
            </h1>
            <p className="text-muted-foreground">
              Internal pricing calculator for custom automation builds.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
