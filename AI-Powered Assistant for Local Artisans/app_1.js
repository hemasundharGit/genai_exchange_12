// Application Data
const craftTypes = [
    "Wooden Craft",
    "Pottery & Ceramics", 
    "Textiles & Fabrics",
    "Metal Work",
    "Paintings",
    "Jewelry",
    "Stone Carving",
    "Leather Craft"
];

const mockDescriptions = {
    "wooden krishna doll": {
        english: "Exquisite hand-carved Kondapalli wooden Krishna figurine, meticulously crafted using traditional techniques passed down through generations. Made from sustainable mango wood and painted with natural, eco-friendly colors, this divine piece captures the essence of Lord Krishna's playful charm. Perfect for home decor, gifting, or spiritual spaces.",
        telugu: "సాంప్రదాయిక పద్ధతుల్లో చేతితో చెక్కిన కొండపల్లి కలప కృష్ణ విగ్రహం. తరతరాలుగా వస్తున్న కళా నైపుణ్యంతో మామిడి కలపతో తయారు చేసి, సహజ రంగులతో రంగులు వేయబడింది. ఇంటి అలంకరణకు, కానుకలకు లేదా పూజా గదికి అనుకూలం."
    },
    "pottery bowl": {
        english: "Beautiful handcrafted ceramic bowl showcasing traditional Indian pottery artistry. Each piece is uniquely shaped on the potter's wheel and fired using time-honored techniques. The earthy texture and natural glazing make it perfect for serving traditional meals or as decorative art.",
        hindi: "पारंपरिक भारतीय मिट्टी के बर्तन की कलाकारी को दर्शाने वाला सुंदर हस्तशिल्प सिरेमिक कटोरा। प्रत्येक टुकड़ा कुम्हार के चाक पर विशिष्ट रूप से आकार दिया गया है और समय-सम्मानित तकनीकों का उपयोग करके तैयार किया गया है।"
    },
    "textile fabric": {
        english: "Vibrant handwoven textile featuring intricate traditional patterns and natural dyes. Crafted by skilled artisans using heritage weaving techniques, this fabric represents centuries of textile artistry. The rich colors and detailed motifs make it ideal for clothing, home furnishing, or collectible art pieces.",
        telugu: "సంక్లిష్టమైన సాంప్రదాయిక నమూనలు మరియు సహజ రంగులతో కూడిన రంగురంగుల చేతితో నేసిన వస్త్రం. వారసత్వ నేత పద్ధతులను ఉపయోగించి నైపుణ్యం గల కళాకారులచే తయారు చేయబడింది."
    },
    "metal lamp": {
        english: "Intricately designed brass oil lamp featuring traditional motifs and exceptional craftsmanship. Hand-forged using ancient metalworking techniques, this lamp combines functionality with artistic beauty. The detailed engravings and polished finish make it perfect for festivals, ceremonies, or home decoration.",
        hindi: "पारंपरिक आकृतियों और असाधारण शिल्प कौशल के साथ जटिल रूप से डिज़ाइन किया गया पीतल का तेल का दीपक। प्राचीन धातु कार्य तकनीकों का उपयोग करके हाथ से बनाया गया, यह दीपक कार्यक्षमता को कलात्मक सुंदरता के साथ जोड़ता है।"
    },
    "clay pot": {
        english: "Traditional earthenware pot crafted on the potter's wheel using time-honored techniques. Made from locally sourced clay and fired in traditional kilns, this pot represents generations of pottery expertise. Its porous nature makes it ideal for storing water and keeping it naturally cool.",
        telugu: "కుమ్మరి చక్రంపై సాంప్రదాయిక పద్ధతులతో తయారు చేసిన మట్టి కుండ. స్థానిక మట్టితో తయారు చేసి, సాంప్రదాయిక కొలిమిలలో కాల్చబడింది. దీని పోరస్ స్వభావం వల్ల నీరు నిల్వ చేయడానికి మరియు సహజంగా చల్లగా ఉంచడానికి అనుకూలం."
    }
};

const pricingData = {
    laborRates: {
        "Wooden Craft": 150,
        "Pottery & Ceramics": 120,
        "Textiles & Fabrics": 180,
        "Metal Work": 200,
        "Paintings": 250,
        "Jewelry": 300,
        "Stone Carving": 180,
        "Leather Craft": 140
    },
    marginPercentages: {
        "Wooden Craft": 45,
        "Pottery & Ceramics": 40,
        "Textiles & Fabrics": 50,
        "Metal Work": 55,
        "Paintings": 60,
        "Jewelry": 65,
        "Stone Carving": 50,
        "Leather Craft": 45
    }
};

// Global variables
let recognition;
let isListening = false;

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing application...');
    setupNavigation();
    setupVoiceRecognition();
    setupPricingCalculator();
}

// Navigation Functions
function setupNavigation() {
    console.log('Setting up navigation...');
    
    const gotoDashboardBtn = document.getElementById('gotoDashboard');
    const goBackBtn = document.getElementById('goBack');
    
    if (gotoDashboardBtn) {
        gotoDashboardBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Go to dashboard clicked');
            showDashboard();
        });
        console.log('Dashboard button listener added');
    } else {
        console.error('Dashboard button not found');
    }
    
    if (goBackBtn) {
        goBackBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Go back clicked');
            showLanding();
        });
        console.log('Back button listener added');
    } else {
        console.error('Back button not found');
    }
}

function showDashboard() {
    console.log('Showing dashboard...');
    const landingPage = document.getElementById('landingPage');
    const dashboardPage = document.getElementById('dashboardPage');
    
    if (landingPage && dashboardPage) {
        landingPage.classList.add('hidden');
        dashboardPage.classList.remove('hidden');
        console.log('Dashboard shown successfully');
    } else {
        console.error('Page elements not found');
    }
}

function showLanding() {
    console.log('Showing landing...');
    const landingPage = document.getElementById('landingPage');
    const dashboardPage = document.getElementById('dashboardPage');
    
    if (landingPage && dashboardPage) {
        dashboardPage.classList.add('hidden');
        landingPage.classList.remove('hidden');
        resetVoiceInterface();
        resetPricingInterface();
        console.log('Landing shown successfully');
    } else {
        console.error('Page elements not found');
    }
}

// Voice Recognition Functions
function setupVoiceRecognition() {
    console.log('Setting up voice recognition...');
    
    const micButton = document.getElementById('micButton');
    if (!micButton) {
        console.error('Mic button not found');
        return;
    }
    
    // Check if browser supports Speech Recognition
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showError('voice', 'Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.');
        micButton.disabled = true;
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-IN';

    recognition.onstart = function() {
        console.log('Speech recognition started');
        isListening = true;
        micButton.classList.add('listening');
        const micText = micButton.querySelector('.mic-text');
        if (micText) micText.textContent = 'Listening...';
        
        const listeningIndicator = document.getElementById('listeningIndicator');
        if (listeningIndicator) listeningIndicator.classList.remove('hidden');
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        console.log('Speech result:', transcript);
        handleSpeechResult(transcript);
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        resetMicButton();
        
        let errorMessage = 'Speech recognition failed. ';
        switch(event.error) {
            case 'no-speech':
                errorMessage += 'No speech was detected. Please try again.';
                break;
            case 'audio-capture':
                errorMessage += 'No microphone was found.';
                break;
            case 'not-allowed':
                errorMessage += 'Microphone access was denied.';
                break;
            default:
                errorMessage += 'Please try again.';
        }
        showError('voice', errorMessage);
    };

    recognition.onend = function() {
        console.log('Speech recognition ended');
        resetMicButton();
    };

    micButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Mic button clicked');
        toggleListening();
    });
    
    console.log('Voice recognition setup complete');
}

function toggleListening() {
    if (isListening) {
        recognition.stop();
    } else {
        resetVoiceInterface();
        try {
            recognition.start();
        } catch (error) {
            console.error('Error starting recognition:', error);
            // Simulate voice input for demo purposes
            setTimeout(() => {
                handleSpeechResult("I made a wooden Krishna doll with my hands");
            }, 1000);
        }
    }
}

function resetMicButton() {
    isListening = false;
    const micButton = document.getElementById('micButton');
    if (micButton) {
        micButton.classList.remove('listening');
        const micText = micButton.querySelector('.mic-text');
        if (micText) micText.textContent = 'Click to Speak';
    }
    
    const listeningIndicator = document.getElementById('listeningIndicator');
    if (listeningIndicator) listeningIndicator.classList.add('hidden');
}

function handleSpeechResult(transcript) {
    console.log('Handling speech result:', transcript);
    
    const rawText = document.getElementById('rawText');
    const speechResults = document.getElementById('speechResults');
    
    if (rawText) rawText.textContent = transcript;
    if (speechResults) {
        speechResults.classList.remove('hidden');
        speechResults.classList.add('show');
    }
    
    // Generate AI descriptions
    generateAIDescriptions(transcript);
}

function generateAIDescriptions(text) {
    console.log('Generating AI descriptions for:', text);
    
    const englishDesc = document.getElementById('englishDesc');
    const localDesc = document.getElementById('localDesc');
    const aiDescriptions = document.getElementById('aiDescriptions');
    
    // Show loading state
    if (englishDesc) englishDesc.innerHTML = '<div class="loading"><div class="spinner"></div>Generating description...</div>';
    if (localDesc) localDesc.innerHTML = '<div class="loading"><div class="spinner"></div>Generating description...</div>';
    if (aiDescriptions) aiDescriptions.classList.remove('hidden');

    // Simulate AI processing delay
    setTimeout(() => {
        const descriptions = getMatchingDescription(text);
        
        if (englishDesc) englishDesc.textContent = descriptions.english;
        if (localDesc) localDesc.textContent = descriptions.local;
        if (aiDescriptions) aiDescriptions.classList.add('show');
        
        console.log('AI descriptions generated');
    }, 1500);
}

function getMatchingDescription(text) {
    const lowerText = text.toLowerCase();
    
    // Try to match with predefined descriptions
    for (const [key, desc] of Object.entries(mockDescriptions)) {
        if (lowerText.includes(key.split(' ')[0]) || 
            lowerText.includes(key.split(' ')[1]) ||
            key.split(' ').some(word => lowerText.includes(word))) {
            return {
                english: desc.english,
                local: desc.telugu || desc.hindi
            };
        }
    }
    
    // Generic fallback descriptions
    return generateGenericDescription(text);
}

function generateGenericDescription(text) {
    const craftWords = ['handmade', 'crafted', 'traditional', 'wooden', 'clay', 'metal', 'textile', 'painted'];
    const foundCrafts = craftWords.filter(word => text.toLowerCase().includes(word));
    
    let english = `Beautiful handcrafted ${foundCrafts.length > 0 ? foundCrafts.join(' and ') : ''} piece showcasing traditional Indian artistry. `;
    english += 'Meticulously created using time-honored techniques passed down through generations. ';
    english += 'Each piece is unique and represents the skilled craftsmanship of local artisans. ';
    english += 'Perfect for home decoration, gifting, or as a collectible art piece.';
    
    let local = 'సాంప్రదాయిక భారతీయ కళా నైపుణ్యాన్ని ప్రదర్శించే అందమైన చేతితో తయారు చేసిన కళాఖండం. ';
    local += 'తరతరాలుగా వస్తున్న పురాతన పద్ధతులతో జాగ్రత్తగా తయారు చేయబడింది. ';
    local += 'ప్రతి ముక్క ప్రత్యేకమైనది మరియు స్థానిక కళాకారుల నైపుణ్యాన్ని సూచిస్తుంది.';
    
    return { english, local };
}

// Pricing Calculator Functions
function setupPricingCalculator() {
    console.log('Setting up pricing calculator...');
    
    const calculatePriceBtn = document.getElementById('calculatePrice');
    if (calculatePriceBtn) {
        calculatePriceBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Calculate price clicked');
            calculatePricing();
        });
        console.log('Calculate button listener added');
    } else {
        console.error('Calculate button not found');
    }
    
    // Add input event listeners for real-time validation
    const inputs = ['craftType', 'materialCost', 'hoursWorked'];
    inputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', validatePricingInputs);
            element.addEventListener('change', validatePricingInputs);
        }
    });
    
    console.log('Pricing calculator setup complete');
}

function validatePricingInputs() {
    const craftType = document.getElementById('craftType')?.value;
    const materialCost = parseFloat(document.getElementById('materialCost')?.value) || 0;
    const hoursWorked = parseFloat(document.getElementById('hoursWorked')?.value) || 0;
    
    const isValid = craftType && materialCost > 0 && hoursWorked > 0;
    const calculatePriceBtn = document.getElementById('calculatePrice');
    if (calculatePriceBtn) {
        calculatePriceBtn.disabled = !isValid;
    }
}

function calculatePricing() {
    console.log('Calculating pricing...');
    
    const craftType = document.getElementById('craftType')?.value;
    const materialCost = parseFloat(document.getElementById('materialCost')?.value) || 0;
    const hoursWorked = parseFloat(document.getElementById('hoursWorked')?.value) || 0;
    
    if (!craftType || materialCost <= 0 || hoursWorked <= 0) {
        showError('pricing', 'Please fill in all fields with valid values.');
        return;
    }
    
    const pricingResults = document.getElementById('pricingResults');
    
    // Show loading state
    if (pricingResults) {
        pricingResults.innerHTML = '<div class="loading"><div class="spinner"></div>Calculating optimal pricing...</div>';
        pricingResults.classList.remove('hidden');
    }
    
    setTimeout(() => {
        const pricing = performPricingCalculation(craftType, materialCost, hoursWorked);
        displayPricingResults(pricing);
        console.log('Pricing calculation complete:', pricing);
    }, 1000);
}

function performPricingCalculation(craftType, materialCost, hoursWorked) {
    const laborRate = pricingData.laborRates[craftType] || 150;
    const marginPercent = pricingData.marginPercentages[craftType] || 45;
    
    const laborCost = Math.round(laborRate * hoursWorked);
    const baseCost = materialCost + laborCost;
    const marginAmount = Math.round((baseCost * marginPercent) / 100);
    const suggestedPrice = Math.round(baseCost + marginAmount);
    
    // Calculate discount price (15-25% off)
    const discountPercent = 20;
    const discountPrice = Math.round(suggestedPrice * (1 - discountPercent / 100));
    
    return {
        materialCost,
        laborCost,
        marginAmount,
        suggestedPrice,
        discountPrice,
        discountPercent
    };
}

function displayPricingResults(pricing) {
    const resultsHTML = `
        <div class="pricing-card">
            <h4><i class="fas fa-chart-line"></i> Pricing Breakdown</h4>
            <div class="breakdown-item">
                <span class="breakdown-label">Material Cost:</span>
                <span class="breakdown-value">₹${pricing.materialCost}</span>
            </div>
            <div class="breakdown-item">
                <span class="breakdown-label">Labor Value:</span>
                <span class="breakdown-value">₹${pricing.laborCost}</span>
            </div>
            <div class="breakdown-item">
                <span class="breakdown-label">Fair Margin:</span>
                <span class="breakdown-value">₹${pricing.marginAmount}</span>
            </div>
            <div class="breakdown-item total">
                <span class="breakdown-label">Suggested Price:</span>
                <span class="breakdown-value">₹${pricing.suggestedPrice}</span>
            </div>
            <div class="breakdown-item discount">
                <span class="breakdown-label">Discount Price:</span>
                <span class="breakdown-value">₹${pricing.discountPrice}</span>
                <span class="discount-percent">(${pricing.discountPercent}% off)</span>
            </div>
        </div>
    `;
    
    const pricingResults = document.getElementById('pricingResults');
    if (pricingResults) {
        pricingResults.innerHTML = resultsHTML;
        pricingResults.classList.add('show');
    }
}

// Utility Functions
function showError(section, message) {
    console.log('Showing error:', section, message);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-triangle"></i>${message}`;
    
    if (section === 'voice') {
        const speechResults = document.getElementById('speechResults');
        if (speechResults) {
            speechResults.innerHTML = '';
            speechResults.appendChild(errorDiv);
            speechResults.classList.remove('hidden');
        }
    } else if (section === 'pricing') {
        const pricingResults = document.getElementById('pricingResults');
        if (pricingResults) {
            pricingResults.innerHTML = '';
            pricingResults.appendChild(errorDiv);
            pricingResults.classList.remove('hidden');
        }
    }
    
    // Auto-hide error after 5 seconds
    setTimeout(() => {
        if (errorDiv && errorDiv.parentNode) {
            errorDiv.style.opacity = '0';
            setTimeout(() => {
                if (errorDiv.parentNode) {
                    errorDiv.remove();
                }
            }, 300);
        }
    }, 5000);
}

function resetVoiceInterface() {
    const speechResults = document.getElementById('speechResults');
    const aiDescriptions = document.getElementById('aiDescriptions');
    const rawText = document.getElementById('rawText');
    const englishDesc = document.getElementById('englishDesc');
    const localDesc = document.getElementById('localDesc');
    
    if (speechResults) speechResults.classList.add('hidden');
    if (aiDescriptions) aiDescriptions.classList.add('hidden');
    if (rawText) rawText.textContent = '';
    if (englishDesc) englishDesc.textContent = '';
    if (localDesc) localDesc.textContent = '';
    
    resetMicButton();
}

function resetPricingInterface() {
    const pricingResults = document.getElementById('pricingResults');
    const craftType = document.getElementById('craftType');
    const materialCost = document.getElementById('materialCost');
    const hoursWorked = document.getElementById('hoursWorked');
    const calculatePriceBtn = document.getElementById('calculatePrice');
    
    if (pricingResults) pricingResults.classList.add('hidden');
    if (craftType) craftType.value = '';
    if (materialCost) materialCost.value = '';
    if (hoursWorked) hoursWorked.value = '';
    if (calculatePriceBtn) calculatePriceBtn.disabled = false;
}

// Add demo functionality for testing
function showDemo() {
    const demoTexts = [
        "I made a wooden Krishna doll with my hands",
        "This is a clay pot made on potter wheel", 
        "Handwoven saree with traditional patterns",
        "Metal lamp with intricate designs"
    ];
    
    const randomText = demoTexts[Math.floor(Math.random() * demoTexts.length)];
    handleSpeechResult(randomText);
}

// Keyboard shortcuts for testing
document.addEventListener('keydown', function(e) {
    // Press 'D' key for demo mode (for testing purposes)
    if (e.key.toLowerCase() === 'd' && e.ctrlKey) {
        e.preventDefault();
        showDemo();
    }
});