
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';

interface VideoConfig {
    aspectRatio: '16:9' | '9:16' | '1:1';
}

export const generateVideo = async (
    ai: GoogleGenAI,
    prompt: string,
    config: VideoConfig
): Promise<string> => {
    let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt,
        config: {
            numberOfVideos: 1,
            aspectRatio: config.aspectRatio,
        },
    });

    // Poll for the result
    while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) {
        throw new Error("Video generation succeeded but no download link was found.");
    }
    
    // The response.body contains the MP4 bytes. You must append an API key when fetching from the download link.
    const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch video file: ${response.statusText}`);
    }
    
    const videoBlob = await response.blob();
    return URL.createObjectURL(videoBlob);
};

export const generateImage = async (
    ai: GoogleGenAI,
    prompt: string
): Promise<string> => {
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
            parts: [{ text: prompt }],
        },
    });
    
    for (const part of response.candidates![0].content.parts) {
        if (part.inlineData) {
            const base64EncodeString: string = part.inlineData.data;
            return `data:image/png;base64,${base64EncodeString}`;
        }
    }
    
    throw new Error("Image generation did not return an image.");
};