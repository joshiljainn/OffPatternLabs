import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollView } from "./scroll-view";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32" id="testimonials">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Common Questions
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              This is a unique opportunity, so it's natural to have questions. Here are the answers to the ones I hear most often.
            </p>
          </ScrollView>
        </div>

        <ScrollView delay={0.3}>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
            <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
              <CardHeader>
                <h3 className="text-lg font-bold">Why is your pricing so affordable?</h3>
              </CardHeader>
              <CardContent>
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-xl font-medium">
                    Because I'm on a mission to learn, I'll work at a cost that is a fraction of what agencies would charge. This is a win-win experiment for both of us. The value you receive will be far greater than your investment.
                  </p>
                </blockquote>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <h3 className="text-lg font-bold">Do you have experience in exports?</h3>
                  <p className="text-xl font-medium">
                    Not yet. My primary focus is on applying my foundational skills in execution, growth, and problem-solving to help you succeed, which is how I get my experience.
                  </p>
                </blockquote>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <h3 className="text-lg font-bold">Is this a consultancy or an agency?</h3>
                  <p>
                    No. This is a hands-on partnership. You're not paying for a report—you’re getting a partner who executes the work.
                  </p>
                </blockquote>
              </CardContent>
            </Card>
            <Card className="card variant-mixed">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <h3 className="text-lg font-bold">How long will this last?</h3>
                  <p>
                  This partnership will last as long as it makes sense for both of us. Once I have more clarity and experience, I may transition to a more structured service.                  </p>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}