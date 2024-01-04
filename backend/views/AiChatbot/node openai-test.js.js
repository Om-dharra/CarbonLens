const apiKey = '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';
const endpoint = 'https://api.openai.com/v1/engines/text-curie-001/completions';


async function sendPromptAndGetResponse(prompt) {
  const data = {
      prompt: prompt,
      max_tokens: 50 // Adjust the number of tokens as per your requirement
  };

  const requestOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(data)
  };

  try {
      const response = await fetch(endpoint, requestOptions);
      const responseData = await response.json();

      // Log the entire response for debugging
      console.log(responseData);

      if (responseData.choices && responseData.choices.length > 0) {
          console.log(responseData.choices[0].text.trim());
      } else {
          console.error('Unexpected response format or empty choices array');
      }
  } catch (error) {
      console.error('Error:', error);
  }
}


// Example prompt
const myPrompt = "Hi";

// Sending the prompt and logging the response
sendPromptAndGetResponse(myPrompt);