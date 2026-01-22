
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || '';

export async function fetchFromStrapi(path: string) {
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
    };

    if (STRAPI_TOKEN) {
        headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
    }

    try {
        const res = await fetch(`${STRAPI_URL}/api${path}`, {
            headers,
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!res.ok) {
            console.error(`Error fetching from Strapi: ${res.status} ${res.statusText}`);
            return null;
        }

        const json = await res.json();
        return json;
    } catch (error) {
        console.error('Error fetching from Strapi:', error);
        return null;
    }
}

// Helper to flatten Strapi v5 response if needed (though v5 standardizes on .data)
export function flattenAttributes(data: any): any {
    if (!data) return null;

    if (Array.isArray(data)) {
        return data.map(flattenAttributes);
    }

    let flattened = { ...data };

    if (data.attributes) {
        flattened = { ...data.attributes, ...flattened, id: data.id };
        delete flattened.attributes;
    }

    // Handle nested data
    for (const key in flattened) {
        if (typeof flattened[key] === 'object' && flattened[key] !== null) {
            if (flattened[key].data) {
                flattened[key] = flattenAttributes(flattened[key].data);
            }
        }
    }

    return flattened;
}
