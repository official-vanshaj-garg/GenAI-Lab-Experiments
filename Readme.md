# GenAI Lab Experiments (SEM 6 - AIML)

> **Course:** CS3234 - Foundations of Generative AI (2025-2026)
> **Repository:** Hands-on experiments covering LLMs, prompt engineering, AI-assisted development, and model pipelines.

---

## Table of Contents

| Lab | Title | Tools / Tech |
|-----|-------|-------------|
| [Lab 1](#lab-1-exploring-ai-platforms--multimodal-generation) | Exploring AI Platforms and Multimodal Generation | ChatGPT, Gemini, Perplexity, Claude, DALL-E, Fliki.ai, Kalaido.ai |
| [Lab 2](#lab-2-hugging-face-fastai--nlp-pipelines) | Hugging Face, FastAI and NLP Pipelines | Python, Transformers, sentence-transformers, FastAI, Jupyter |
| [Lab 3](#lab-3-prompt-engineering-patterns--personalization) | Prompt Engineering Patterns and Personalization | LangChain, Flan-T5, HuggingFace Pipelines |
| [Lab 4](#lab-4-ai-assisted-web-development-with-lovable-ai) | AI-Assisted Web Development with Lovable AI | Lovable AI, React, TypeScript, Vite, Tailwind CSS |
| [Lab 5](#lab-5-ai-powered-resume-generation--interview-simulation) | AI-Powered Resume Generation and Interview Simulation | ChatGPT / Gemini, RGC Prompting |

---

## Lab 1: Exploring AI Platforms and Multimodal Generation

**Objective:** To gain hands-on experience with diverse AI platforms, refine text-based prompts for professional communication, and explore image and video generation.

**Folder:** `Lab 1/`

### What Was Done

**1. Initial Interactions across LLMs**
Compared the four major LLMs (ChatGPT, Gemini, Perplexity, Claude) using a shared Root Prompt to observe differences in personality, tone, and accuracy. Persona Prompting (e.g., "Act as a research assistant") was applied to each platform to study how models adapt their responses.

**2. Launch Email for a Workshop**
Crafted a professional event announcement email for a GenAI workshop using the RGC (Role, Goal, Context) framework. The Question Refinement Pattern was applied to iteratively improve prompt quality and output persuasiveness.

**3. Image Generation with DALL-E**
Generated visual assets via DALL-E through ChatGPT's Image Creator by writing highly descriptive prompts. The Cognitive Verifier Pattern was used to request missing visual details (lighting, style, framing) when the initial outputs were not satisfactory.

**4. Video Creation with Fliki.ai / Kalaido.ai**
Prepared a video script using Chain of Thought (CoT) prompting to ensure logical narrative flow, then imported it into video generation tools. Few-Shot Prompting was used to guide narration style and transition consistency.

### Concepts Covered

- Root Prompt, Persona Prompting, RGC Framework
- Question Refinement Pattern, Cognitive Verifier Pattern
- Chain of Thought (CoT) Prompting, Few-Shot Prompting
- Text-to-image generation with DALL-E
- AI-assisted video creation with Fliki.ai and Kalaido.ai

---

## Lab 2: Hugging Face, FastAI and NLP Pipelines

**Objective:** To explore pre-trained models and implement NLP inference using the Hugging Face `transformers`, `datasets`, `sentence-transformers` libraries, and FastAI.

**Folder:** `Lab2/`

### Files

| File | Description |
|------|-------------|
| `Lab2_1RVU23CSE526.ipynb` | Main Jupyter notebook with all experiments |
| `Sentence_Embeddings_Notes.md` | Simplified notes explaining sentence embeddings and vector similarity |
| `sentiment_results.csv` | Output CSV from sentiment analysis pipeline |
| `history.csv` | Training history from the FastAI text classification experiment |

### What Was Done

**1. Hugging Face Pipelines**
Built and ran inference pipelines for multiple NLP tasks out-of-the-box:
- **Sentiment Analysis** using `distilbert-base-uncased-finetuned-sst-2-english`
- **Translation** (English to German) via `Helsinki-NLP/opus-mt-en-de`
- **Summarization** using `facebook/bart-large-cnn`
- **Named Entity Recognition (NER)** with grouped entity output

**2. Sentence Embeddings and Semantic Search**
Used `sentence-transformers` with the `all-MiniLM-L6-v2` model to generate 384-dimensional sentence embeddings. Implemented cosine similarity search to find semantically related sentences from a corpus, and saved structured notes on how embedding vectors represent meaning spatially.

**3. FastAI Text Classification**
Loaded the IMDb movie reviews dataset via Hugging Face `datasets`, built a `TextDataLoaders` pipeline, and trained an `AWD_LSTM` classifier using FastAI for 1 epoch on a 4000-sample subset. Reported validation accuracy.

**4. Saving Outputs**
Saved sentiment results to `sentiment_results.csv` and training history to `history.csv` for review and submission.

### Key Libraries Used

```
transformers   datasets   sentence-transformers   fastai   torch
```

---

## Lab 3: Prompt Engineering Patterns and Personalization

**Objective:** To master foundational prompt engineering patterns that control the persona, reasoning logic, contextual awareness, and refinement of LLM outputs.

**Folder:** `Lab3/`

### Files

| File | Description |
|------|-------------|
| `Lab3_Prompt_Engineering.ipynb` | Core notebook implementing prompt patterns via LangChain + Flan-T5 |
| `lab 3.ipynb` | Extended notebook exploring additional prompt engineering experiments |

### What Was Done

**Model Setup**
Used `google/flan-t5-base` (a seq2seq transformer) via the Hugging Face `pipeline` API, wrapped into a LangChain `HuggingFacePipeline` for structured prompt chaining.

**Prompt Patterns Implemented**

| Pattern | Description | Example |
|---------|-------------|---------|
| **Basic Prompt** | No context, direct question | "Explain what a computer is." |
| **Persona Prompting** | Role-based instruction to shape tone | "You are a school teacher. Explain..." |
| **Teaching Constraint** | Add format/length constraint on top of persona | "Explain in one short paragraph..." |
| **Cognitive Verifier** | Chain-of-thought reasoning before answering | "Think step by step before answering..." |
| **Root Prompt** | Overarching rule that bounds the entire session | "Your task is to help with academic learning only..." |

**Conversation Memory** (attempted via LangChain `ConversationBufferMemory` and `ConversationChain`) was explored to demonstrate how memory enables multi-turn context retention vs stateless prompts.

---

## Lab 4: AI-Assisted Web Development with Lovable AI

**Objective:** To design and develop a web application using Lovable AI, and understand how LLMs assist in code generation, debugging, and refactoring during software development.

**Folder:** `Lab 4/jugaad-journeys-main/`

### Project: Jugaad Journeys

A full-featured travel guide web application for budget travellers in India, built entirely using **Lovable AI** through structured natural language prompts. The app provides practical commute guidance for Indian cities, real traveller stories, safety tips, and city-by-city transport breakdowns.

**Live Project:** [Lovable.dev Project](https://jugaad-journeys.lovable.app/)

### Tech Stack

| Technology | Role |
|-----------|------|
| **Lovable AI** | AI-powered code generation and iteration |
| **React + TypeScript** | Frontend framework |
| **Vite** | Build tool and dev server |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | Pre-built accessible component library |

### Application Structure

```
src/
├── pages/
│   ├── Home.tsx         # Landing page with all sections
│   ├── About.tsx        # About Jugaad Journeys
│   └── cities/          # City-specific travel pages
├── components/
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── WhySection.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── CitiesSection.tsx
│   │   ├── CommuteTable.tsx
│   │   ├── StoriesSection.tsx
│   │   ├── SafetySection.tsx
│   │   └── FinalCTA.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── CreatorHighlight.tsx
```

### AI-Assisted Development Process

1. **Prompt-to-code generation:** Described the full app concept to Lovable AI, which scaffolded all components, routing, and styling.
2. **Iterative refinement:** Used follow-up prompts to improve UI styling, add responsiveness, and adjust layout sections.
3. **Bug detection:** Introduced intentional issues and asked Lovable AI to identify and fix them, observing its explanation of the fixes.
4. **Deployment:** Published directly from Lovable's interface via Share and Publish.

---

## Lab 5: AI-Powered Resume Generation and Interview Simulation

**Objective:** To use AI tools (ChatGPT / Gemini) to generate a professional resume and simulate a complete technical and behavioural interview.

**Folder:** `Lab 5/`

### Files

| File | Description |
|------|-------------|
| `Lab5_1RVU23CSE526.docx` | Complete lab report with resume output and interview transcript |

### What Was Done

**Part A: Resume Generation**
- Structured a personal student profile (education, skills, projects, achievements, career goal)
- Used the RGC (Role, Goal, Context) prompting framework to generate a 1-page, ATS-friendly resume
- Performed 2+ iterative refinements:
  - Tailored for a specific job description (AI/ML Engineer at a startup)
  - Improved impact using action verbs and quantified achievements

**Part B: Interview Simulation**
Simulated a complete end-to-end interview using AI as the interviewer:

| Interview Phase | What Was Covered |
|----------------|-----------------|
| Technical Questions | Python, ML concepts, project walkthrough (5+ questions) |
| Problem-Solving | Algorithmic and design questions |
| HR / Behavioural | Strengths, weaknesses, failure experiences, team conflict, career goals |
| AI Evaluation | Overall score, strength areas, improvement suggestions |

**Prompting Techniques Used**
- **Persona Prompting:** "Act as a senior technical interviewer at a product-based company..."
- **RGC Framework:** Role + Goal + Context for all resume and interview setup prompts
- **Iterative Refinement:** Multiple prompt rounds to tune resume quality and interview flow

---

## Repository Structure

```
GH_GenAI/
├── Lab 1/                          # AI tools exploration (ChatGPT, DALL-E, Fliki, Kalaido)
├── Lab2/
│   ├── Lab2_1RVU23CSE526.ipynb     # HuggingFace + FastAI experiments
│   ├── Sentence_Embeddings_Notes.md
│   ├── sentiment_results.csv
│   └── history.csv
├── Lab3/
│   ├── Lab3_Prompt_Engineering.ipynb
│   └── lab 3.ipynb
├── Lab 4/
│   └── jugaad-journeys-main/       # React web app built with Lovable AI
├── Lab 5/
│   └── Lab5_1RVU23CSE526.docx      # Resume + interview simulation report
├── requirements.txt
└── Readme.md
```

---

## Core Themes Across All Labs

| Theme | Labs |
|-------|------|
| Prompt Engineering (RGC, Persona, CoT, Few-Shot) | Lab 1, Lab 3, Lab 5 |
| LLM Comparison and Platform Exploration | Lab 1 |
| NLP Model Inference and Pipelines | Lab 2 |
| Sentence Embeddings and Semantic Search | Lab 2 |
| AI-Assisted Code and App Generation | Lab 4 |
| Resume and Career AI Tools | Lab 5 |

---

*Course: CS3234 - Foundations of Generative AI | SEM 6 AIML | 2025-2026*
