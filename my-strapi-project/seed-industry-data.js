const { createStrapi } = require('@strapi/strapi');

async function seed() {
    const strapi = await createStrapi({ distDir: './dist' }).load();

    const industries = ['Dentist', 'Roofer', 'HVAC', 'Lawyer', 'Med Spa', 'Car Dealership'];
    const tools = ['Vapi', 'Retell AI', 'Bland AI'];

    const painPoints = [
        "We are missing tons of calls after hours because no one is at the desk.",
        "Leads are going cold because we can't call them back instantly.",
        "Our receptionist is overwhelmed and missing potential new client calls.",
        "We're losing money on marketing spend because inbound calls aren't converting.",
        "Scheduling appointments is taking up too much staff time, leading to burnout."
    ];

    const solutionHooksPrototype = [
        "Voice AI answers 24/7, ensuring you never miss a lead.",
        "Instant AI follow-up calls mean you convert faster than competitors.",
        "Automate booking and FAQs, freeing up your front desk staff.",
        "Capture every production-ready lead with an always-on AI agent.",
        "Scale your outreach without hiring more phone staff."
    ];

    console.log('Starting seed process...');

    for (let i = 0; i < 50; i++) {
        const industry = industries[Math.floor(Math.random() * industries.length)];
        const tool = tools[Math.floor(Math.random() * tools.length)];
        const painPoint = painPoints[Math.floor(Math.random() * painPoints.length)];
        const solutionHook = solutionHooksPrototype[Math.floor(Math.random() * solutionHooksPrototype.length)];

        // Create a unique-ish slug
        const slug = `${industry.toLowerCase().replace(/ /g, '-')}-${Math.random().toString(36).substring(2, 8)}`;

        try {
            await strapi.entityService.create('api::industry-guide.industry-guide', {
                data: {
                    industry: industry,
                    pain_point: painPoint,
                    solution_hook: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: `${solutionHook} Use ${tool} to automate this workflow.` // Simple block content
                                }
                            ]
                        }
                    ],
                    recommended_tool: tool,
                    affiliate_link: `https://${tool.toLowerCase().replace(/ /g, '')}.com/?ref=offpattern`,
                    slug: slug,
                    publishedAt: new Date(),
                },
            });
            console.log(`Created entry ${i + 1}/50: ${industry} - ${tool}`);
        } catch (error) {
            console.error(`Failed to create entry ${i + 1}:`, error);
        }
    }

    console.log('Seeding complete.');
    process.exit(0);
}

seed().catch((error) => {
    console.error('Seed script failed:', error);
    process.exit(1);
});
