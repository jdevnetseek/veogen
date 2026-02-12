
export const generateOpenAIImage = async (prompt: string): Promise<string> => {
    const apiKey = localStorage.getItem('openai_api_key');
    if (!apiKey) {
        throw new Error("OpenAI API key not found. Please set it in the Settings page.");
    }

    const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: 'dall-e-3',
            prompt: prompt,
            n: 1,
            size: '1024x1024',
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`OpenAI API Error: ${errorData.error.message}`);
    }

    const data = await response.json();
    const imageUrl = data.data[0].url;
    
    // Fetch image and create a blob URL to prevent expiry
    const imageResponse = await fetch(imageUrl);
    const imageBlob = await imageResponse.blob();
    return URL.createObjectURL(imageBlob);
};

export const generateOpenAIVideo = async (prompt: string): Promise<string> => {
    // Placeholder function as Sora API is not public yet.
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("OpenAI Video API (Sora) is not yet publicly available."));
        }, 1000);
    });
};
