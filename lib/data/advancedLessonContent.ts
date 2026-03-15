import type { FullLesson } from './lessons';

export const advancedLessonMap: Record<string, FullLesson> = {

  // ============================================================
  // PATH: AI AGENTS AND MODERN WORKFLOWS
  // ============================================================

  'what-are-ai-agents': {
    slug: 'what-are-ai-agents',
    title: 'What Are AI Agents?',
    pathTitle: 'AI Agents and Modern Workflows',
    pathSlug: 'ai-agents-modern-workflows',
    duration: '10 min',
    order: 1,
    totalInPath: 10,
    prevLesson: null,
    nextLesson: 'agent-vs-simple-prompt',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'Beyond question and answer',
        body: "Until recently, using AI meant asking a question and getting an answer. One prompt, one response. That model is powerful — but limited.\n\nAI agents change this. An agent is an AI system that can take a sequence of actions to complete a goal, not just respond to a single question. It can plan steps, use tools, check its own work, and loop until the task is done.\n\nIn 2026, agents are moving from research labs into everyday work tools. Understanding what they are — and what they are not — is a key skill for anyone working with AI.",
      },
      {
        type: 'example',
        label: 'The difference in practice',
        weak: 'Regular AI: You ask "Summarize this report" → AI gives you a summary.',
        strong: 'AI Agent: You say "Research our three main competitors, find their recent pricing changes, and produce a comparison table." → The agent searches, reads, extracts data, formats it, and returns a complete analysis.',
      },
      {
        type: 'text',
        heading: 'What makes something an agent?',
        body: "An AI system is acting as an agent when it:\n\n1. Has a goal, not just a question to answer\n2. Takes multiple steps to achieve that goal\n3. Can use tools (search, read documents, run calculations, send requests)\n4. Can evaluate its own output and course-correct\n5. Operates with some level of autonomy — you do not supervise every step\n\nNot every use of AI needs all five of these. Some workflows use agents for just one or two steps. The key is that the AI is doing work across multiple actions, not just responding once.",
      },
      {
        type: 'tip',
        title: 'Agents are still tools — you are still in charge',
        body: "The word 'autonomous' can sound alarming. But in practice, agents do not act without your direction. You define the goal, you set the scope, and you review the output. The autonomy is about how they get there, not whether you stay in control.",
        variant: 'tip',
      },
      {
        type: 'checklist',
        title: 'Signs that an agent approach might help you',
        items: [
          'The task requires 3 or more sequential steps',
          'You need information gathered from multiple sources',
          'The output depends on processing something first (a document, a dataset)',
          'The task is repetitive and you do it the same way each time',
          'You spend time doing manual handoffs between AI and other tools',
        ],
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'Which of these best describes what makes an AI system an "agent" rather than a regular AI chat?',
        options: [
          { id: 'a', text: 'It uses a larger AI model', correct: false, explanation: 'Model size is not what defines an agent. The defining feature is multi-step goal-directed behaviour.' },
          { id: 'b', text: 'It takes multiple steps and can use tools to achieve a goal autonomously', correct: true, explanation: 'Exactly right. Agents plan and execute sequences of actions, using tools when needed, rather than just responding once.' },
          { id: 'c', text: 'It never makes mistakes', correct: false, explanation: 'Agents can and do make mistakes — which is why human oversight remains important.' },
          { id: 'd', text: 'It requires technical knowledge to use', correct: false, explanation: 'Many agent-based tools are designed for non-technical users. You do not need coding skills to benefit from them.' },
        ],
        correctExplanation: 'Exactly right. Multi-step, goal-directed, tool-using behaviour is the core of what makes something an agent.',
        incorrectExplanation: 'Think about what is fundamentally different about an agent compared to a single chat exchange.',
      },
      {
        type: 'takeaway',
        items: [
          'An AI agent takes multiple steps to achieve a goal — it does not just answer once',
          'Agents can use tools, plan sequences, and evaluate their own work',
          'You are still in control — agents work within the goal and scope you define',
          'Agent-like features already exist in tools you may already use',
        ],
      },
      {
        type: 'recap',
        items: [
          'Agents = goal-directed, multi-step AI that can use tools',
          'The autonomy is in how they work, not whether you stay in control',
          'Next: when is an agent the right choice vs a simple prompt?',
        ],
      },
    ],
  },

  'agent-vs-simple-prompt': {
    slug: 'agent-vs-simple-prompt',
    title: 'Agent vs Simple Prompt: When to Use Each',
    pathTitle: 'AI Agents and Modern Workflows',
    pathSlug: 'ai-agents-modern-workflows',
    duration: '9 min',
    order: 2,
    totalInPath: 10,
    prevLesson: 'what-are-ai-agents',
    nextLesson: 'tool-connected-ai-basics',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'Not every task needs an agent',
        body: "One of the most important skills in 2026 AI use is knowing when to use a simple prompt versus when to invest in an agent-based approach. Over-engineering a simple task wastes time. Under-engineering a complex one produces poor results.\n\nThis lesson gives you a clear decision framework.",
      },
      {
        type: 'checklist',
        title: 'Use a simple prompt when:',
        items: [
          'The task is contained in a single exchange',
          'You have all the information AI needs right now',
          'The output does not depend on fetching or processing other sources',
          'Speed matters more than depth',
          'The task is one-off and not something you repeat regularly',
        ],
      },
      {
        type: 'checklist',
        title: 'Consider an agent approach when:',
        items: [
          'The task involves 3 or more dependent steps',
          'AI needs to gather information before it can help',
          'The workflow involves multiple tools or data sources',
          'The task is repetitive and would benefit from automation',
          'The output depends on processing a large volume of content',
        ],
      },
      {
        type: 'example',
        label: 'Decision in practice',
        weak: 'Simple prompt task: "Draft a subject line for this email." — One input, one output. Agent would be overkill.',
        strong: 'Agent task: "Research what our three main competitors say about pricing on their websites, then draft a one-page competitive analysis." — Multiple sources, sequential processing, synthesis.',
      },
      {
        type: 'tip',
        title: 'Start with the simplest approach that works',
        body: "When in doubt, try a simple prompt first. If you find yourself doing manual follow-up steps repeatedly — copying output from one tool into another, or running the same prompt sequence every week — that is your signal to build an agent workflow.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'A colleague sends you a 40-page supplier contract and asks you to flag unusual payment terms, highlight liability clauses, and produce a 1-page risk summary. Is this best handled by a simple prompt or an agent-based approach?',
        options: [
          { id: 'a', text: 'Simple prompt — just paste it in and ask', correct: false, explanation: 'A long document requiring structured extraction across multiple dimensions benefits from a more systematic approach.' },
          { id: 'b', text: 'Agent approach — multiple extraction and synthesis steps across a large document', correct: true, explanation: 'Correct. This task involves reading a long document, identifying multiple categories of information, and producing structured output.' },
          { id: 'c', text: 'Neither — this requires a human lawyer', correct: false, explanation: 'A lawyer should review important legal decisions, but AI can help with initial extraction and flagging to save significant time.' },
        ],
        correctExplanation: 'Right. Multi-step extraction and synthesis across a large document is a classic agent-level task.',
        incorrectExplanation: 'Think about how many steps are involved and whether a single prompt could realistically handle all of them reliably.',
      },
      {
        type: 'practice',
        title: 'Audit your own workflow',
        instruction: 'Think about the last three times you used AI for a task. For each one, ask: was this a simple prompt task or would it have benefited from an agent approach? Identify one current task that involves repeated manual steps.',
        prompt: '"I currently use AI to do [describe your workflow]. I manually do [describe the steps]. Is this a good candidate for an agent workflow? What would the steps look like?"',
      },
      {
        type: 'takeaway',
        items: [
          'Simple prompts are right for single-step, contained tasks',
          'Agents are right for multi-step, source-dependent, repeatable tasks',
          'Start simple — look for repeated manual stitching as the signal to build an agent',
        ],
      },
      {
        type: 'recap',
        items: [
          'Use the checklist to diagnose each task before choosing your approach',
          'Repeated manual follow-up steps = signal to consider an agent workflow',
          'Next: how agents actually access external information through tools',
        ],
      },
    ],
  },

  'tool-connected-ai-basics': {
    slug: 'tool-connected-ai-basics',
    title: 'How Agents Access Tools and External Data',
    pathTitle: 'AI Agents and Modern Workflows',
    pathSlug: 'ai-agents-modern-workflows',
    duration: '10 min',
    order: 3,
    totalInPath: 10,
    prevLesson: 'agent-vs-simple-prompt',
    nextLesson: 'memory-context-agent-workflows',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'The isolation problem',
        body: "A standard AI conversation is isolated. The AI only knows what you have typed into the chat. It cannot read your files, check your calendar, look up current prices, or interact with any system you actually work with.\n\nAgent-capable AI solves this through tool access. When an AI has tools available, it can take actions beyond text generation: it can search the web, read a document, query a database, run a calculation, or call an external service.",
      },
      {
        type: 'text',
        heading: 'The four main tool categories',
        body: "In agent systems, tools typically fall into four categories:\n\n1. Search and retrieval — web search, document search, database lookup\n2. Read and write — read files, write files, update records\n3. Execute — run code, do calculations, process data\n4. Communicate — send messages, create calendar events, post to services\n\nAn agent does not have all of these by default. It can only use the tools it has been given access to. Understanding what tools are available is essential for knowing what an agent can and cannot do.",
      },
      {
        type: 'example',
        label: 'Agent with web search tool vs without',
        weak: 'Without tools: "What is the current price of steel?" → AI gives an answer from its training data, which may be months or years out of date.',
        strong: 'With web search tool: "What is the current price of steel?" → Agent searches, finds a current source, extracts the figure, and gives you a verified, dated answer.',
      },
      {
        type: 'tip',
        title: 'Tool access defines agent capability',
        body: "When evaluating an agent tool, the right question is not 'how intelligent is the AI?' but 'what tools does it have access to?' Two agents using the same underlying model will produce very different results depending on what they can access.",
        variant: 'tip',
      },
      {
        type: 'checklist',
        title: 'Questions to ask about any agent tool you use',
        items: [
          'What tools does this agent have access to?',
          'Can it read files or only text I paste in?',
          'Can it write or update anything, or is it read-only?',
          'Does it access the internet in real time?',
          'What happens to data it reads — is it stored or sent anywhere?',
          'Can I see what actions it took to produce the output?',
        ],
      },
      {
        type: 'text',
        heading: 'Transparency and auditability',
        body: "One of the most important features of trustworthy agent tools is the ability to see what actions the agent took. Good agent UIs show you a log: 'Searched for X', 'Read document Y', 'Extracted data from Z'.\n\nThis transparency matters because it tells you:\n- Whether the agent found the right sources\n- Whether it interpreted the task correctly\n- Where to check if something looks wrong in the output\n\nIf an agent produces output but shows you no evidence of how it got there, be more cautious about trusting it.",
      },
      {
        type: 'quiz',
        variant: 'true-false',
        question: 'Two AI agents using the same underlying model will always produce the same quality output for research tasks.',
        options: [
          { id: 'true', text: 'True', correct: false, explanation: 'False. Tool access determines what an agent can do. An agent with web search produces very different results than one without — regardless of the underlying model.' },
          { id: 'false', text: 'False', correct: true, explanation: 'Correct. Tool access is often more important than model quality. An agent with the right tools will dramatically outperform one without, regardless of the underlying model.' },
        ],
      },
      {
        type: 'takeaway',
        items: [
          'Agents overcome AI isolation by using tools: search, read/write, execute, communicate',
          'Tool access defines what an agent can actually do — always check before relying on output',
          'Transparent action logs are a sign of a trustworthy agent tool',
          'Ask about data handling before connecting agents to sensitive systems',
        ],
      },
      {
        type: 'recap',
        items: [
          'Tools are what turn an AI chat into an AI agent',
          'Four tool types: search/retrieval, read/write, execute, communicate',
          'Next: how memory and context shape the quality of multi-step agent work',
        ],
      },
    ],
  },

  'memory-context-agent-workflows': {
    slug: 'memory-context-agent-workflows',
    title: 'Memory and Context in Agent Workflows',
    pathTitle: 'AI Agents and Modern Workflows',
    pathSlug: 'ai-agents-modern-workflows',
    duration: '9 min',
    order: 4,
    totalInPath: 10,
    prevLesson: 'tool-connected-ai-basics',
    nextLesson: 'designing-your-first-agent-workflow',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'Why context matters for agents',
        body: "A simple AI chat forgets everything when you close the window. A well-designed agent workflow maintains relevant context across steps — which is what makes multi-step work coherent rather than fragmented.\n\nUnderstanding how context works in AI systems helps you design better workflows and avoid the frustrating experience of an agent that seems to 'forget' what it was doing.",
      },
      {
        type: 'text',
        heading: 'The context window: your working memory limit',
        body: "Every AI model has a context window — the amount of text it can 'hold in mind' at once. Modern models have large context windows (100,000 tokens or more), but they still have limits.\n\nFor agent workflows, this means:\n- Very long documents may need to be processed in chunks\n- Very long multi-step conversations may start losing earlier context\n- Outputs from earlier steps need to be explicitly passed forward, not assumed\n\nGood agent design is partly about managing context: keeping what is relevant, summarizing what is not, and making sure each step has the information it needs.",
      },
      {
        type: 'example',
        label: 'Context management in practice',
        weak: 'Ask agent to "Summarize all five reports" in a single step with 200 pages of content — may hit context limits or produce shallow synthesis.',
        strong: 'Ask agent to summarize each report separately, then synthesize the five summaries — smaller, focused context per step produces better and more reliable output.',
      },
      {
        type: 'text',
        heading: 'Persistent memory vs session memory',
        body: "Some agent tools now support persistent memory — they remember things about you or your work across sessions. This can be powerful:\n\n- Your writing style and preferences\n- Your role and the context you work in\n- Decisions made in previous sessions\n- Your most common task types\n\nBut persistent memory also raises questions: what is being stored, where, and can you edit or delete it? Always check the memory settings in any tool you use regularly.",
      },
      {
        type: 'tip',
        title: 'Give the agent a brief at the start',
        body: "For complex agent tasks, start with a clear brief that gives the agent everything it needs: who you are, what the goal is, what the output should look like, and any important constraints. This upfront context investment pays off in every subsequent step.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You are using an agent to process a 150-page research report. What is the most reliable approach?',
        options: [
          { id: 'a', text: 'Paste the entire report and ask for a full synthesis in one step', correct: false, explanation: 'Very long documents can exceed context limits or produce shallow output. Chunking produces more reliable results.' },
          { id: 'b', text: 'Process the report section by section, then synthesize the section summaries', correct: true, explanation: 'Correct. This manages context limits, produces deeper section analysis, and gives you better final synthesis.' },
          { id: 'c', text: 'Ask the agent to summarize only the first 20 pages', correct: false, explanation: 'This ignores most of the report. The goal is to process all of it reliably.' },
        ],
        correctExplanation: 'Right. Chunking and progressive synthesis is the reliable approach for long documents.',
        incorrectExplanation: 'Think about what happens to quality when you push too much into a single context window.',
      },
      {
        type: 'takeaway',
        items: [
          'Context windows limit how much an agent can process at once — design around this',
          'Chunk long documents and synthesize progressively rather than processing everything at once',
          'Persistent memory can be powerful — but always understand what is being stored',
          'Start complex agent tasks with a clear brief that contains all the context the agent needs',
        ],
      },
      {
        type: 'recap',
        items: [
          'Context window = the agent\'s working memory limit',
          'Good agent design manages context deliberately',
          'Next: designing your first practical agent workflow from scratch',
        ],
      },
    ],
  },

  'designing-your-first-agent-workflow': {
    slug: 'designing-your-first-agent-workflow',
    title: 'Designing Your First Agent Workflow',
    pathTitle: 'AI Agents and Modern Workflows',
    pathSlug: 'ai-agents-modern-workflows',
    duration: '11 min',
    order: 5,
    totalInPath: 10,
    prevLesson: 'memory-context-agent-workflows',
    nextLesson: 'human-review-agent-output',
    type: 'practice',
    blocks: [
      {
        type: 'text',
        heading: 'From concept to working workflow',
        body: "You now understand what agents are, when to use them, how they access tools, and how context works. This lesson puts it together: you will design a real agent workflow for a task in your own work.\n\nThe design process is not technical. It is about being clear and specific — which is the same skill that makes good prompts work.",
      },
      {
        type: 'checklist',
        title: 'The 5-step agent workflow design process',
        items: [
          '1. Define the goal: What is the final output? What does success look like?',
          '2. List the steps: What sequence of actions is needed to get there?',
          '3. Identify the tools: What information or external access does each step need?',
          '4. Define the handoffs: What does each step produce, and what does the next step consume?',
          '5. Plan your review: Where will you check the output before relying on it?',
        ],
      },
      {
        type: 'example',
        label: 'Workflow design: weekly competitive briefing',
        body: "Goal: A weekly 1-page brief on competitor activity.\n\nStep 1: Search competitor websites and news for the past 7 days\nStep 2: Extract mentions of pricing, product changes, and key announcements\nStep 3: Organize findings by competitor\nStep 4: Identify the 2-3 most significant developments\nStep 5: Draft a structured brief with a summary and implications\n\nTools needed: Web search, document writing\nHandoffs: Search → extraction → organization → synthesis → draft\nReview point: Before the brief is shared — check that key claims have source links",
      },
      {
        type: 'tip',
        title: 'Start narrower than you think you need to',
        body: "First-time agent workflows almost always work better when scoped tightly. Start with one small, well-defined task. Get it working reliably. Then expand. A narrow workflow you can trust is worth more than a broad workflow that sometimes fails.",
        variant: 'tip',
      },
      {
        type: 'practice',
        title: 'Design your own agent workflow',
        instruction: 'Pick a task in your work that involves multiple steps and some information gathering. Use the 5-step process above to design the workflow. Write it out step by step — goal, actions, tools needed, handoffs, and review point.',
        prompt: 'Use AI to help refine it: "I want to design an agent workflow for [describe your task]. The goal is [describe desired output]. I am thinking of these steps: [list your steps]. Can you improve this workflow design, flag any problems, and suggest what tools would be needed?"',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'When designing your first agent workflow, which approach gives the best starting point?',
        options: [
          { id: 'a', text: 'Design the most comprehensive workflow possible so it handles all edge cases', correct: false, explanation: 'Comprehensive workflows are harder to debug and maintain. Start narrow and expand based on what works.' },
          { id: 'b', text: 'Start narrow, get it working reliably, then expand', correct: true, explanation: 'Exactly. A reliable narrow workflow builds your confidence and gives you a solid foundation to build on.' },
          { id: 'c', text: 'Copy someone else\'s workflow without adapting it', correct: false, explanation: 'Workflows need to fit your specific context, tools, and review process. Copying without adapting rarely works.' },
        ],
        correctExplanation: 'Right. Reliability before breadth is the correct approach for first workflows.',
        incorrectExplanation: 'Think about what makes a first workflow trustworthy and improvable.',
      },
      {
        type: 'takeaway',
        items: [
          'Agent workflow design is a thinking exercise, not a technical one',
          'Five steps: goal, actions, tools, handoffs, review points',
          'Start narrower than you think — reliability matters more than breadth at first',
          'Every workflow needs a human review point before output is trusted',
        ],
      },
      {
        type: 'recap',
        items: [
          'Good workflows start with a clear goal and work backwards',
          'Narrow and reliable beats broad and fragile every time',
          'Next: how to review agent output systematically and catch errors early',
        ],
      },
    ],
  },

  'human-review-agent-output': {
    slug: 'human-review-agent-output',
    title: 'Reviewing Agent Output: Staying in Control',
    pathTitle: 'AI Agents and Modern Workflows',
    pathSlug: 'ai-agents-modern-workflows',
    duration: '10 min',
    order: 6,
    totalInPath: 10,
    prevLesson: 'designing-your-first-agent-workflow',
    nextLesson: 'common-agent-failures',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'Autonomy creates a review responsibility',
        body: "When an agent handles multiple steps without your intervention, you get efficiency. But you also take on a responsibility: reviewing the output before you act on it.\n\nAgent errors are different from single-prompt errors. Because agents chain steps together, an early mistake can propagate through the rest of the workflow — producing output that looks complete and coherent but contains a fundamental flaw.\n\nThe review step is not optional. It is part of the workflow.",
      },
      {
        type: 'text',
        heading: 'Where errors are most likely to enter',
        body: "In a multi-step agent workflow, errors typically enter at one of three points:\n\n1. Input misinterpretation — the agent misunderstood the goal or scope at the start\n2. Source quality — the agent used a low-quality or outdated source\n3. Synthesis — the agent extrapolated, generalized, or smoothed over contradictions when combining information\n\nKnowing where to look helps you review efficiently rather than reading every word of every output.",
      },
      {
        type: 'checklist',
        title: 'A practical agent output review checklist',
        items: [
          'Does the output actually address the goal I set?',
          'Are any specific facts, numbers, or citations verifiable?',
          'Does the agent\'s action log show it used the right sources?',
          'Are there any claims that seem suspiciously neat or too perfectly aligned?',
          'Is anything missing that should have been included?',
          'Does the output contain any internal contradictions?',
          'Would I be comfortable sharing this before checking it further?',
        ],
      },
      {
        type: 'example',
        label: 'Review in action',
        body: "An agent produces a competitive analysis brief. Before using it:\n\n✓ Check: Does it cover all three competitors you asked about? (scope completeness)\n✓ Check: Click at least two of the cited sources — do they actually say what the brief claims? (source verification)\n✓ Check: Do the 'key implications' follow logically from the findings? (synthesis quality)\n✓ Check: Is there anything conspicuously missing — a competitor you know is relevant? (gap detection)",
      },
      {
        type: 'tip',
        title: 'The 10-minute review habit',
        body: "For agent-produced work you will use professionally, a 10-minute focused review catches 80% of significant issues. This is not reading every word — it is systematically spot-checking the highest-risk elements: specific claims, source accuracy, scope completeness, and synthesis logic.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'An agent produces a 3-page research brief. You notice one statistic that seems surprising. What is the right response?',
        options: [
          { id: 'a', text: 'Assume it is correct since the agent generated the whole document confidently', correct: false, explanation: 'Agent confidence does not indicate accuracy. Surprising statistics are exactly the type of claim that warrants verification.' },
          { id: 'b', text: 'Verify the statistic against the original source before using the brief professionally', correct: true, explanation: 'Correct. Surprising or suspiciously precise claims should always be checked against the primary source.' },
          { id: 'c', text: 'Ask the agent to confirm the statistic', correct: false, explanation: 'Asking the agent to self-verify is unreliable — it may restate or fabricate additional support for the same claim.' },
        ],
        correctExplanation: 'Right. Primary source verification is the only reliable check for specific factual claims.',
        incorrectExplanation: 'Think about what gives you reliable certainty about a specific factual claim.',
      },
      {
        type: 'takeaway',
        items: [
          'Agent errors can propagate — a bad early step contaminates the whole output',
          'Three main entry points for errors: misinterpretation, source quality, synthesis',
          'The review checklist makes verification efficient rather than exhaustive',
          'A 10-minute focused review catches the majority of significant issues',
        ],
      },
      {
        type: 'recap',
        items: [
          'Review is not optional — it is part of any responsible agent workflow',
          'Focus review on: scope, source accuracy, synthesis logic, missing elements',
          'Next: common ways agent workflows fail and how to avoid them',
        ],
      },
    ],
  },

  'common-agent-failures': {
    slug: 'common-agent-failures',
    title: 'Common Agent Failures and How to Avoid Them',
    pathTitle: 'AI Agents and Modern Workflows',
    pathSlug: 'ai-agents-modern-workflows',
    duration: '9 min',
    order: 7,
    totalInPath: 10,
    prevLesson: 'human-review-agent-output',
    nextLesson: 'agents-path-quiz',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'Failure patterns are predictable',
        body: "Agent workflows fail in predictable ways. The good news: most failures can be prevented with better design. Understanding the common failure patterns before you encounter them is one of the highest-leverage things you can do as an agent workflow practitioner.",
      },
      {
        type: 'text',
        heading: 'The six most common agent failure modes',
        body: "1. Goal drift — the agent drifts from the original goal mid-workflow, particularly on long tasks\n2. Hallucinated sources — the agent cites sources that do not exist or misrepresents what a source says\n3. Scope creep — the agent includes far more than you asked for, making output hard to use\n4. Loop failures — the agent gets stuck repeatedly trying the same failed approach\n5. Overconfident synthesis — the agent presents a synthesized conclusion as definitive when the underlying sources actually disagree\n6. Silent errors — the agent fails at a step but continues working, producing output that looks complete but has a gap",
      },
      {
        type: 'example',
        label: 'Overconfident synthesis — a common trap',
        weak: 'Prompt: "Summarize what experts say about remote work productivity." → Agent produces: "Studies consistently show remote work increases productivity by 13-15%." (This overstates and oversimplifies a contested research area.)',
        strong: 'Better prompt: "Summarize what research says about remote work productivity. Explicitly note any disagreements between studies or conflicting findings." → Agent now surfaces the nuance rather than flattening it.',
      },
      {
        type: 'checklist',
        title: 'How to prevent each failure mode',
        items: [
          'Goal drift: start with a specific goal statement and ask the agent to confirm it before proceeding',
          'Hallucinated sources: always check that cited sources actually exist and say what is claimed',
          'Scope creep: define not just what to include but explicitly what to exclude',
          'Loop failures: set a step limit and review if the agent seems to be repeating itself',
          'Overconfident synthesis: ask the agent to note disagreements, not just areas of agreement',
          'Silent errors: check the action log for any step that shows no output or an error message',
        ],
      },
      {
        type: 'tip',
        title: 'Specificity is your best failure prevention tool',
        body: "Almost every agent failure mode improves with more specific goal definition, scope constraints, and output format instructions. A vague goal produces a vague or drifting workflow. A specific, constrained goal produces focused, reviewable output.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'better-prompt',
        question: 'You want an agent to research current AI regulation trends across three countries. Which prompt is more likely to produce reliable output?',
        options: [
          { id: 'a', text: 'Research AI regulation trends globally and summarize the key points.', correct: false, explanation: 'Too broad. "Globally" means the agent must choose scope, which often leads to uneven coverage and missed important nuance.' },
          { id: 'b', text: 'Research AI regulation developments in the EU, US, and UK from 2024-2026 only. For each: summarize the key regulatory developments, note any areas of disagreement among policymakers, and flag anything that has changed significantly in the last 12 months. Do not include anything outside these three regions.', correct: true, explanation: 'Specific scope (3 countries), specific time range, specific output structure, explicit exclusion, and requirement to note disagreements — all failure prevention.' },
        ],
        correctExplanation: 'Exactly. Scope, time range, structure, and explicit exclusions prevent the most common agent failures.',
        incorrectExplanation: 'Think about which failure modes the vague prompt leaves open.',
      },
      {
        type: 'takeaway',
        items: [
          'Agent failures are predictable — goal drift, hallucinated sources, scope creep, loops, overconfident synthesis, silent errors',
          'Specificity is the primary prevention tool — vague goals produce unreliable workflows',
          'Ask agents to surface disagreements, not just consensus',
          'Always check the action log for silent step failures',
        ],
      },
      {
        type: 'recap',
        items: [
          'Six failure modes — all preventable with better design and clearer prompting',
          'Specificity in goal, scope, and format prevents most failures before they happen',
          'Next: path review quiz to consolidate what you have learned',
        ],
      },
    ],
  },

  'agents-path-quiz': {
    slug: 'agents-path-quiz',
    title: 'AI Agents Path Review',
    pathTitle: 'AI Agents and Modern Workflows',
    pathSlug: 'ai-agents-modern-workflows',
    duration: '8 min',
    order: 10,
    totalInPath: 10,
    prevLesson: 'common-agent-failures',
    nextLesson: null,
    type: 'quiz',
    blocks: [
      {
        type: 'text',
        heading: 'Consolidate what you know',
        body: "This review quiz covers the key ideas from the AI Agents path. It is not a test — it is a chance to reinforce the most practically useful concepts before you start applying them.",
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'What is the defining characteristic that makes an AI system an "agent" rather than a simple chat interface?',
        options: [
          { id: 'a', text: 'It uses a more powerful AI model', correct: false, explanation: 'Model power is not the defining feature. Many simple chats use the same model as agents.' },
          { id: 'b', text: 'It takes multiple goal-directed steps and can use external tools', correct: true, explanation: 'Correct. Multi-step execution with tool access is what makes something an agent.' },
          { id: 'c', text: 'It remembers all previous conversations permanently', correct: false, explanation: 'Memory is one optional feature of some agents, not the defining characteristic.' },
        ],
        correctExplanation: 'Right. Goal-directed multi-step execution is the core.',
        incorrectExplanation: 'Review the first lesson in this path for the core definition.',
      },
      {
        type: 'quiz',
        variant: 'better-prompt',
        question: 'You need an agent to monitor three competitor websites weekly and flag significant changes. Which task definition gives it the best chance of doing this reliably?',
        options: [
          { id: 'a', text: 'Monitor competitors and tell me what changed.', correct: false, explanation: 'Too vague — which competitors? What counts as significant? What format should the output take?' },
          { id: 'b', text: 'Each Monday, check [Competitor A, B, C] websites. Flag any changes to: pricing, product announcements, or leadership news. Ignore blog posts and minor content updates. Produce a bullet-point brief with one line per change and a direct link to the source.', correct: true, explanation: 'Specific scope, specific categories, explicit exclusions, clear output format — all the elements of a reliable agent task.' },
        ],
        correctExplanation: 'Exactly. Specific, constrained task definitions produce reliable workflows.',
        incorrectExplanation: 'Think about what information the agent needs to do this consistently and reliably every week.',
      },
      {
        type: 'quiz',
        variant: 'true-false',
        question: 'Because agents operate autonomously across multiple steps, their output generally does not need human review before being used professionally.',
        options: [
          { id: 'true', text: 'True', correct: false, explanation: 'The opposite is true. Autonomy increases the need for review — errors can propagate through multiple steps without detection.' },
          { id: 'false', text: 'False', correct: true, explanation: 'Correct. Agent output requires systematic review, precisely because errors can enter early and compound through subsequent steps.' },
        ],
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'An agent produces a research summary that cites a specific study as its main source. What is the single most important review action?',
        options: [
          { id: 'a', text: 'Ask the agent if it is sure about the study', correct: false, explanation: 'Self-verification by the same agent is unreliable — it may restate the same hallucinated information.' },
          { id: 'b', text: 'Verify that the cited study exists and actually supports the claim', correct: true, explanation: 'Correct. Source verification is the most important single check for agent-produced research output.' },
          { id: 'c', text: 'Accept it if the writing style seems professional', correct: false, explanation: 'Professional writing style is unrelated to factual accuracy. Hallucinated sources are often written with the same confident fluency as accurate ones.' },
        ],
        correctExplanation: 'Right. Source existence and accuracy is the most critical check.',
        incorrectExplanation: 'Think about the most common failure mode in agent-produced research.',
      },
      {
        type: 'takeaway',
        items: [
          'Agents = multi-step, goal-directed, tool-using AI systems',
          'Tool access defines capability — always check what tools an agent has',
          'Context management, specific task definitions, and review are the three foundations of reliable agent use',
          'Human review is mandatory, not optional, for professionally used agent output',
        ],
      },
      {
        type: 'recap',
        items: [
          'You have completed the AI Agents and Modern Workflows path',
          'You can now design, run, and review agent workflows in your own work',
          'Recommended next path: Advanced Prompting for Reliable Output',
        ],
      },
    ],
  },

  // ============================================================
  // PATH: ADVANCED PROMPTING FOR RELIABLE OUTPUT
  // ============================================================

  'structured-prompt-architecture': {
    slug: 'structured-prompt-architecture',
    title: 'Structured Prompt Architecture',
    pathTitle: 'Advanced Prompting for Reliable Output',
    pathSlug: 'advanced-prompting-reliable-output',
    duration: '12 min',
    order: 1,
    totalInPath: 10,
    prevLesson: null,
    nextLesson: 'chain-of-thought-techniques',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'The gap between good and great prompting',
        body: "Most people learn to prompt by trial and error. They figure out that being specific helps, that context matters, and that asking for a format improves output. That gets you to good.\n\nStructured prompt architecture takes you to great — to prompts that produce reliable, consistent results at scale.\n\nThe core idea: instead of thinking about prompts as messages, think about them as specifications.",
      },
      {
        type: 'text',
        heading: 'The five components of a structured prompt',
        body: "Every well-structured prompt for a non-trivial task contains some combination of these five elements:\n\n1. Role — Who is the AI being asked to be?\n2. Context — What is the situation and background?\n3. Task — What exactly needs to be done?\n4. Constraints — What rules, limits, or requirements apply?\n5. Output format — What should the result look like?\n\nNot every prompt needs all five. But understanding all five means you can deliberately choose what to include.",
      },
      {
        type: 'example',
        label: 'Unstructured vs structured',
        weak: 'Write a summary of this document.',
        strong: 'Role: You are a senior analyst preparing a board briefing.\nContext: The document below is a 15-page market research report on electric vehicle adoption in Europe.\nTask: Summarize the key findings in 5 bullet points, focusing on commercial implications for a B2B manufacturer.\nConstraints: No jargon. Each bullet under 25 words. Do not include methodology details.\nFormat: Numbered bullet list with a one-sentence headline above it.',
      },
      {
        type: 'tip',
        title: 'You do not need all five every time',
        body: "For a simple task, two or three components is fine. The value of the framework is that you can consciously ask: 'Am I missing context that would make this better? Have I been clear enough about the output format?' It turns prompting from intuitive to deliberate.",
        variant: 'tip',
      },
      {
        type: 'text',
        heading: 'Constraints: the most underused component',
        body: "Constraints are what prevent AI from making its own choices that do not serve you.\n\nWithout constraints, AI will choose a default length (usually too long), assume a generic audience, use its default tone, and include information you did not need.\n\nGood constraints are specific and negative as well as positive. 'Do not include recommendations' is just as valuable as 'Include only facts.' 'Under 200 words' is more useful than 'Keep it short.'",
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You are prompting AI to draft a job description. Which addition would most improve the reliability and usefulness of the output?',
        options: [
          { id: 'a', text: 'Adding "please" and "thank you" to the prompt', correct: false, explanation: 'Politeness does not affect AI output quality. The structural components matter.' },
          { id: 'b', text: 'Specifying: the seniority level, the audience who will read it, the tone, and what NOT to include', correct: true, explanation: 'These are all constraint and context additions that make the output far more targeted and useful.' },
          { id: 'c', text: 'Making the prompt longer with more background about your company history', correct: false, explanation: 'More length is not always better. Relevant constraints and output specifications beat general background.' },
        ],
        correctExplanation: 'Exactly. Specific constraints and context components make the biggest difference.',
        incorrectExplanation: 'Think about which structural components would help AI produce the output you actually need.',
      },
      {
        type: 'practice',
        title: 'Rebuild a prompt using the framework',
        instruction: 'Take a prompt you use regularly and rebuild it using the five-component framework. Identify what components are missing or weak. Run both versions and compare the output.',
        prompt: 'Framework to fill in:\nRole: [Who should the AI be?]\nContext: [What is the background and situation?]\nTask: [What exactly needs to be done?]\nConstraints: [What rules or limits apply?]\nFormat: [What should the output look like?]',
      },
      {
        type: 'takeaway',
        items: [
          'Structure prompts as specifications: Role, Context, Task, Constraints, Format',
          'Constraints prevent AI from making defaults that do not serve you',
          'Output format specification eliminates the most common cause of dissatisfying responses',
          'Not every prompt needs all five — but always ask what is missing',
        ],
      },
      {
        type: 'recap',
        items: [
          'Five components: Role, Context, Task, Constraints, Format',
          'Constraints and output format are the most underused — and most impactful',
          'Next: chain-of-thought techniques for complex reasoning tasks',
        ],
      },
    ],
  },

  'chain-of-thought-techniques': {
    slug: 'chain-of-thought-techniques',
    title: 'Chain-of-Thought Prompting',
    pathTitle: 'Advanced Prompting for Reliable Output',
    pathSlug: 'advanced-prompting-reliable-output',
    duration: '11 min',
    order: 2,
    totalInPath: 10,
    prevLesson: 'structured-prompt-architecture',
    nextLesson: 'persona-design-advanced',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'When AI needs to think, not just answer',
        body: "For straightforward tasks — drafting an email, summarizing a document — standard prompting works well. But for complex reasoning tasks — analyzing a business situation, evaluating options, working through a multi-step problem — standard prompting often produces shallow or confident-sounding but incorrect conclusions.\n\nChain-of-thought prompting is the technique that fixes this. Instead of asking AI to jump to a conclusion, you ask it to reason through the problem step by step.",
      },
      {
        type: 'text',
        heading: 'What chain-of-thought actually does',
        body: "When you include 'think through this step by step' or 'work through your reasoning before giving the answer', you are asking AI to make its reasoning visible and incremental rather than jumping to the conclusion.\n\nThis works because:\n- Errors in reasoning become visible before they reach the conclusion\n- Each step can be built on correctly-established prior steps\n- The model is less likely to shortcut to a plausible-sounding but wrong answer\n- You can see where the reasoning went wrong if the conclusion still seems off",
      },
      {
        type: 'example',
        label: 'Without vs with chain-of-thought',
        weak: '"Which of these three vendor proposals should we choose?" → AI picks one with a brief justification. The justification may miss important considerations.',
        strong: '"I\'m evaluating three vendor proposals. Before giving a recommendation: (1) List the key evaluation criteria for this type of decision. (2) Evaluate each proposal against each criterion. (3) Identify any trade-offs or significant risks. (4) Then give your recommendation with reasoning." → Structured reasoning produces a much more reliable and reviewable analysis.',
      },
      {
        type: 'checklist',
        title: 'When chain-of-thought improves output most',
        items: [
          'Multi-step calculations or logical problems',
          'Evaluating trade-offs between options',
          'Diagnosing a problem with multiple possible causes',
          'Planning a sequence of dependent steps',
          'Analyzing a complex situation with several interacting factors',
          'Any task where you want to see how the AI reached its conclusion',
        ],
      },
      {
        type: 'tip',
        title: 'Chain-of-thought also makes errors visible',
        body: "One of the underrated benefits of chain-of-thought: it exposes AI reasoning for you to review. If you see the steps, you can spot where the reasoning went wrong before the wrong conclusion influences your decision. This is a powerful quality control mechanism.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'better-prompt',
        question: 'You want AI to help decide between two marketing strategies. Which prompt is more likely to produce a reliable analysis?',
        options: [
          { id: 'a', text: 'Compare Strategy A and Strategy B and tell me which is better.', correct: false, explanation: 'This asks for a conclusion without showing the reasoning — you get a recommendation you cannot audit.' },
          { id: 'b', text: 'I need to choose between Strategy A and Strategy B. Before recommending: (1) List the 5 most important evaluation criteria for this type of decision. (2) Score each strategy 1-5 on each criterion with a brief reason. (3) Identify the biggest risk in each strategy. (4) Then recommend which to choose and why, acknowledging the trade-offs.', correct: true, explanation: 'Structured reasoning steps make the analysis auditable, cover important criteria systematically, and produce a justified recommendation.' },
        ],
        correctExplanation: 'Exactly. Structured reasoning produces an auditable, reliable analysis.',
        incorrectExplanation: 'Think about which prompt gives you output you can actually review and trust.',
      },
      {
        type: 'practice',
        title: 'Apply chain-of-thought to a real decision',
        instruction: 'Find a decision or analysis problem in your current work. Write a prompt that explicitly asks AI to reason through it step by step before giving a conclusion. Compare this output to what a direct question would have produced.',
        prompt: 'Template: "I need to [describe decision or problem]. Before giving your recommendation, please: (1) [reasoning step 1] (2) [reasoning step 2] (3) [reasoning step 3]. Then provide your conclusion with the key reasoning."',
      },
      {
        type: 'takeaway',
        items: [
          'Chain-of-thought improves accuracy on complex reasoning tasks by making reasoning incremental and visible',
          'Ask AI to work through steps before concluding — do not let it jump straight to an answer',
          'Visible reasoning is also a quality control tool — you can see where logic breaks down',
          'Most useful for trade-off analysis, diagnosis, planning, and multi-step problems',
        ],
      },
      {
        type: 'recap',
        items: [
          'Chain-of-thought = ask AI to reason step by step, not jump to conclusions',
          'Makes complex analysis more reliable and auditable',
          'Next: persona design for targeted and consistent AI output',
        ],
      },
    ],
  },

  'persona-design-advanced': {
    slug: 'persona-design-advanced',
    title: 'Persona Design for Targeted Output',
    pathTitle: 'Advanced Prompting for Reliable Output',
    pathSlug: 'advanced-prompting-reliable-output',
    duration: '10 min',
    order: 3,
    totalInPath: 10,
    prevLesson: 'chain-of-thought-techniques',
    nextLesson: 'few-shot-prompting',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'Why persona design matters beyond job titles',
        body: "You have probably assigned AI a role before: 'Act as a marketing expert' or 'You are a helpful teacher.' This is a good start. But basic role assignments are often too vague to produce the shift in quality they should.\n\nEffective persona design is more precise. It specifies not just who the AI is, but what perspective they hold, what they know, what they prioritize, and how they communicate — creating a genuinely distinct voice and viewpoint for each task.",
      },
      {
        type: 'example',
        label: 'Weak persona vs strong persona',
        weak: '"Act as a marketing expert and review this campaign brief."',
        strong: '"You are a direct-response marketing director with 15 years of experience in B2B SaaS. You are known for prioritizing measurable outcomes over creative flair, and for asking hard questions about targeting and conversion. Review this campaign brief as you would in a team meeting — being honest about weaknesses and specific about what needs to change."',
      },
      {
        type: 'text',
        heading: 'The four dimensions of a strong persona',
        body: "A well-designed persona specifies four things:\n\n1. Expertise and background — what do they know deeply? What is their domain?\n2. Perspective — what do they care about? What are their priorities and biases?\n3. Communication style — how direct are they? How much do they hedge? What tone?\n4. Relationship to the task — are they a reviewer, a collaborator, a critic, a teacher?\n\nYou do not need all four every time. But when you need precise, targeted output, specifying more dimensions produces dramatically more useful responses.",
      },
      {
        type: 'checklist',
        title: 'High-value persona design use cases',
        items: [
          'Critical feedback on your own work — assign a tough, honest reviewer',
          'Writing for a specific audience — give the AI the perspective of that audience',
          'Stress-testing an idea — assign a skeptical, contrarian persona',
          'Subject-specific expertise — specify the domain and depth of knowledge',
          'Tone matching — assign a persona whose communication style matches your output needs',
        ],
      },
      {
        type: 'tip',
        title: 'Assign the critic, not the cheerleader',
        body: "One of the most powerful uses of persona design: assign AI a persona that challenges your work rather than validates it. 'You are a skeptical investor who has seen many pitches fail' produces far more useful feedback than 'You are a helpful reviewer.' Useful feedback requires a persona that is allowed to disagree.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You want AI to give you genuinely useful critical feedback on a business plan. Which persona assignment is most likely to produce it?',
        options: [
          { id: 'a', text: '"You are a helpful business advisor. Give me feedback on this plan."', correct: false, explanation: 'A "helpful" persona defaults to supportive feedback. It will find things to praise before noting concerns.' },
          { id: 'b', text: '"You are a venture capitalist who has funded 40 companies and passed on 400 more. Your default response to a plan is skepticism. Identify the three most serious weaknesses in this plan — the ones that would make you pass on it."', correct: true, explanation: 'This persona has the expertise, the correct relationship to the task (skeptic, not supporter), and a specific critical task.' },
          { id: 'c', text: '"You are an expert. What do you think of my plan?"', correct: false, explanation: 'Too vague. "Expert" in what? "What do you think" invites general commentary rather than specific critical analysis.' },
        ],
        correctExplanation: 'Right. The right persona for critical feedback is one that is allowed — and expected — to find problems.',
        incorrectExplanation: 'Think about what kind of persona is designed to give you honest critical feedback, not general opinions.',
      },
      {
        type: 'practice',
        title: 'Design a persona for your most common task type',
        instruction: 'Identify the task you use AI for most frequently. Design a persona that would produce the most useful output for that task — specifying expertise, perspective, communication style, and relationship to the work.',
        prompt: 'Use AI to refine it: "I use AI mainly for [describe task type]. Help me design the ideal persona specification for this task — including expertise, perspective, communication style, and how they should approach the work."',
      },
      {
        type: 'takeaway',
        items: [
          'Effective persona design specifies expertise, perspective, communication style, and task relationship',
          'Assign personas that challenge and critique, not just support',
          'A skeptical, contrarian persona produces more useful feedback than a helpful one',
          'Four dimensions: background, perspective, communication style, task relationship',
        ],
      },
      {
        type: 'recap',
        items: [
          'Weak persona = job title; strong persona = expertise + perspective + style + role',
          'The best feedback comes from personas designed to disagree',
          'Next: few-shot prompting — teaching AI by example',
        ],
      },
    ],
  },

  'few-shot-prompting': {
    slug: 'few-shot-prompting',
    title: 'Few-Shot Prompting: Teaching by Example',
    pathTitle: 'Advanced Prompting for Reliable Output',
    pathSlug: 'advanced-prompting-reliable-output',
    duration: '10 min',
    order: 4,
    totalInPath: 10,
    prevLesson: 'persona-design-advanced',
    nextLesson: 'prompt-chaining-workflows',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'When instructions are not enough',
        body: "Sometimes you know exactly what you want the output to look like, but describing it in words is harder than showing it. This is where few-shot prompting comes in.\n\nFew-shot prompting means giving AI one or more examples of the output you want before asking it to produce the actual output. Rather than describing the format, tone, or style, you demonstrate it.",
      },
      {
        type: 'text',
        heading: 'The power of examples over instructions',
        body: "Showing an example communicates far more than describing what you want:\n\n- The exact tone and voice (not just 'professional' but what professional actually sounds like in your context)\n- The precise format and structure\n- The appropriate level of detail\n- Any idiosyncratic style choices that are hard to articulate\n\nThis makes few-shot prompting especially powerful for tasks where you have a strong sense of what good output looks like but would struggle to specify it completely in words.",
      },
      {
        type: 'example',
        label: 'Zero-shot vs few-shot for consistent style',
        weak: 'Zero-shot: "Write a product update email in our company style." → AI produces something professional but with unfamiliar phrasing and structure.',
        strong: 'Few-shot: "Here is an example of a product update email we previously sent: [paste example]. Write a new update email for [new feature] in the same style and structure." → AI matches the actual style, not a generic approximation of it.',
      },
      {
        type: 'checklist',
        title: 'When few-shot prompting is most effective',
        items: [
          'You have a strong existing style you want matched exactly',
          'The task has a specific output format that is hard to describe in words',
          'You are producing multiple outputs that must be consistent with each other',
          'The task involves classification and you want to define the categories by example',
          'You are creating structured data output (JSON, tables, reports) with a precise schema',
        ],
      },
      {
        type: 'tip',
        title: 'One good example is often enough',
        body: "You do not need many examples to get the benefit of few-shot prompting. One high-quality example of exactly what you want is usually sufficient. The example does the heavy lifting that description cannot — but a single excellent example works better than several mediocre ones.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You want AI to consistently classify customer support tickets into specific categories that your team uses. The categories have nuance that is hard to explain in writing. What is the best approach?',
        options: [
          { id: 'a', text: 'Describe each category in detail and ask AI to classify based on the descriptions', correct: false, explanation: 'Category descriptions can be ambiguous. Examples of correctly classified tickets communicate the nuance more precisely.' },
          { id: 'b', text: 'Provide 2-3 already-classified example tickets for each category before asking AI to classify new ones', correct: true, explanation: 'Few-shot with examples per category communicates the classification nuance that descriptions alone miss.' },
          { id: 'c', text: 'Just ask AI to classify the tickets without any examples or descriptions', correct: false, explanation: 'Zero-shot classification for custom categories is unreliable — AI will use generic category interpretations that may not match yours.' },
        ],
        correctExplanation: 'Right. Examples communicate nuanced classification criteria more reliably than descriptions.',
        incorrectExplanation: 'Think about how you would teach a new colleague to do this classification — would you describe or show?',
      },
      {
        type: 'practice',
        title: 'Build a few-shot prompt for a repeatable task',
        instruction: 'Identify a task you do regularly where you have existing examples of what good output looks like. Build a few-shot prompt using one of your best existing examples, then test it on new input. Compare the consistency with your previous zero-shot approach.',
        prompt: 'Prompt structure: "[Brief context explanation]. Here is an example of the output I need: [paste your best existing example]. Now produce the same type of output for: [new input]."',
      },
      {
        type: 'takeaway',
        items: [
          'Few-shot prompting provides examples before asking for output — showing rather than telling',
          'Effective when tone, style, or format is hard to describe but easy to demonstrate',
          'One good example is often enough — quality beats quantity',
          'Especially powerful for consistency across multiple outputs and classification tasks',
        ],
      },
      {
        type: 'recap',
        items: [
          'Few-shot = give examples first, then ask for the real output',
          'Shows AI the actual style and format you want, not an approximation',
          'Next: prompt chaining — connecting multiple prompts into a workflow',
        ],
      },
    ],
  },

  'prompt-chaining-workflows': {
    slug: 'prompt-chaining-workflows',
    title: 'Prompt Chaining: Connecting Prompts into Workflows',
    pathTitle: 'Advanced Prompting for Reliable Output',
    pathSlug: 'advanced-prompting-reliable-output',
    duration: '10 min',
    order: 5,
    totalInPath: 10,
    prevLesson: 'few-shot-prompting',
    nextLesson: 'building-your-prompt-library',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'When one prompt is not enough',
        body: "Complex tasks often cannot be done well in a single prompt. The output of one step needs to become the input of the next. Trying to do everything at once in a single prompt usually produces shallow, generic results.\n\nPrompt chaining is the practice of breaking a complex task into a deliberate sequence of prompts, where each step produces focused output that feeds the next step.",
      },
      {
        type: 'text',
        heading: 'Why chaining beats a single long prompt',
        body: "A single prompt asking AI to research, analyze, synthesize, and write a report in one step produces output that does each thing partially well. Chaining lets each step be done thoroughly:\n\nStep 1: Research — focused on finding and extracting relevant information\nStep 2: Analysis — focused on identifying patterns and evaluating what was found\nStep 3: Synthesis — focused on combining findings into a coherent narrative\nStep 4: Writing — focused on communicating the synthesis clearly\n\nEach step gets the AI's full attention rather than splitting it across competing demands.",
      },
      {
        type: 'example',
        label: 'Single prompt vs chained workflow for a strategic brief',
        weak: '"Research the market opportunity, analyze the competitive landscape, and write a strategic brief for launching in Germany." → One long prompt produces a superficial result across all three areas.',
        strong: 'Chain:\nPrompt 1: "Research the German market for [product type]. What are the key demand drivers, market size estimates, and customer segments? Return findings as structured notes."\nPrompt 2: "Based on these market findings: [paste output], analyze the three main competitors operating in this space. For each: positioning, pricing, key weaknesses."\nPrompt 3: "Using this market research [paste] and competitive analysis [paste], draft a 2-page strategic brief for a market entry in Germany. Focus on differentiation opportunity."',
      },
      {
        type: 'checklist',
        title: 'When to use prompt chaining',
        items: [
          'The task has naturally sequential stages (research → analysis → synthesis → writing)',
          'Different stages require different perspectives or approaches',
          'You want to review and refine between steps before continuing',
          'The total scope is too large for a single prompt to handle well',
          'You want to reuse early-stage outputs for multiple later purposes',
        ],
      },
      {
        type: 'tip',
        title: 'Review between steps, not just at the end',
        body: "One of the biggest advantages of chaining over single prompts: you can review and refine at each step before it becomes the input for the next. A mistake caught at step 1 is easy to fix. The same mistake at step 4 may require rerunning the whole chain.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You are producing a research report on a competitor. Which approach produces the most reliable output?',
        options: [
          { id: 'a', text: 'Ask AI to research, analyze, and draft the full report in one prompt', correct: false, explanation: 'One prompt splits AI attention across too many demands. Each element gets shallow treatment.' },
          { id: 'b', text: 'Chain: gather information first, then analyze, then structure and write', correct: true, explanation: 'Chaining lets each stage get focused attention and gives you review checkpoints between steps.' },
          { id: 'c', text: 'Ask the same question in multiple separate conversations and combine the best answers', correct: false, explanation: 'This produces inconsistent output that is hard to combine coherently. Chaining within a workflow is more structured.' },
        ],
        correctExplanation: 'Right. Sequential stages with review points produce more reliable and deeper output.',
        incorrectExplanation: 'Think about which approach lets each part of the task get full focus and allows review between stages.',
      },
      {
        type: 'takeaway',
        items: [
          'Complex tasks benefit from being broken into a deliberate sequence of focused prompts',
          'Each step in the chain gets full AI focus — not split attention across competing demands',
          'Review between steps while corrections are still easy, not just at the end',
          'Chaining is especially powerful for research, analysis, and multi-stage writing tasks',
        ],
      },
      {
        type: 'recap',
        items: [
          'Prompt chaining = break complex tasks into focused sequential steps',
          'Each step produces input for the next — with a review checkpoint between',
          'Next: building a personal prompt library for consistent everyday use',
        ],
      },
    ],
  },

  'building-your-prompt-library': {
    slug: 'building-your-prompt-library',
    title: 'Building Your Personal Prompt Library',
    pathTitle: 'Advanced Prompting for Reliable Output',
    pathSlug: 'advanced-prompting-reliable-output',
    duration: '10 min',
    order: 6,
    totalInPath: 10,
    prevLesson: 'prompt-chaining-workflows',
    nextLesson: 'advanced-prompting-quiz',
    type: 'practice',
    blocks: [
      {
        type: 'text',
        heading: 'From ad hoc to systematic',
        body: "Most people who use AI regularly encounter the same types of tasks repeatedly. Every time, they either write a new prompt from scratch or rely on vague memory of what worked before.\n\nA personal prompt library solves this. It is a small, organized collection of your best prompts for your most common tasks — documented once and reused reliably. Done well, it saves hours every week and ensures consistent output quality.",
      },
      {
        type: 'text',
        heading: 'What goes in a prompt library',
        body: "A useful prompt library is not a massive archive. It is a small collection of high-quality templates for the tasks you actually do repeatedly. Each entry should contain:\n\n1. Task name — what is this for?\n2. The prompt template — with [brackets] for variable parts you swap out each use\n3. Example output — one good example so you remember what to expect\n4. Notes — any important tips for using this prompt effectively\n\nStart with 5-10 entries. Quality over quantity. A library of 10 excellent prompts you actually use beats a library of 100 you never open.",
      },
      {
        type: 'example',
        label: 'A prompt library entry',
        body: 'Task: Weekly team status update email\n\nPrompt:\n"Role: You are a clear, concise communicator in a professional team setting.\nContext: I am sending a weekly status email to my team after [describe project/week].\nTask: Write a brief weekly status update email.\nConstraints: Under 200 words. No bullet points — use short paragraphs. Do not use corporate jargon.\nFormat: Subject line, then 3 paragraphs: (1) what we completed this week, (2) what is next, (3) any blockers or decisions needed from the team.\nInputs: Completed this week: [paste your notes]. Up next: [describe next priorities]. Blockers: [list any]"\n\nNotes: Replace the [brackets] with your actual weekly notes. Takes 2 minutes and produces a polished email every time.',
      },
      {
        type: 'checklist',
        title: 'Your prompt library starter tasks to document',
        items: [
          'Your most common type of professional email (request, update, follow-up)',
          'Meeting or project summary from rough notes',
          'Review or feedback on your own writing',
          'First-draft for a recurring deliverable (report, brief, proposal)',
          'Research or analysis for a type of decision you make regularly',
          'Any prompt you have had to rebuild from memory more than twice',
        ],
      },
      {
        type: 'tip',
        title: 'Store it where you will actually use it',
        body: "The best prompt library is one you actually open. A Notion page, a Google Doc, a pinned note on your phone — wherever you are when you need it. The format does not matter. Accessibility does. If it takes more than 10 seconds to find, it will not get used.",
        variant: 'tip',
      },
      {
        type: 'practice',
        title: 'Build your first 3 prompt library entries',
        instruction: 'Identify the three tasks you use AI for most often. For each one, write a properly structured prompt template with [variable] placeholders, one example output, and a short note about how to use it best. Store them somewhere you will actually access them.',
        prompt: 'Use AI to help structure a template: "I frequently use AI to [describe task]. Here is a rough prompt I have used before: [paste rough prompt]. Can you turn this into a well-structured reusable template with [variable] placeholders, using the Role/Context/Task/Constraints/Format structure?"',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'What is the most important characteristic of a useful personal prompt library?',
        options: [
          { id: 'a', text: 'Having as many prompts as possible — the more the better', correct: false, explanation: 'Quantity creates clutter. A small number of excellent, well-used prompts is more valuable than a large library nobody uses.' },
          { id: 'b', text: 'A small collection of high-quality, actually-used templates for your most common tasks', correct: true, explanation: 'Exactly. Usefulness comes from quality, accessibility, and regular actual use — not volume.' },
          { id: 'c', text: 'Storing prompts from other people rather than building your own', correct: false, explanation: "Other people's prompts are a starting point at best. Your library should reflect your tasks, your style, and your context." },
        ],
        correctExplanation: 'Right. Small, high-quality, and actually used beats large and untouched.',
        incorrectExplanation: 'Think about what makes a library genuinely useful in practice, not impressive in theory.',
      },
      {
        type: 'takeaway',
        items: [
          'A prompt library is a small, organized collection of templates for your most common tasks',
          'Each entry: task name, prompt template with [variables], example output, notes',
          'Start with 5-10 entries — quality over quantity',
          'Store it where you will actually access it — accessibility determines whether it gets used',
        ],
      },
      {
        type: 'recap',
        items: [
          'A good prompt library saves hours weekly and ensures consistent output',
          'Document your most common tasks first — not the most impressive ones',
          'Next: path review quiz',
        ],
      },
    ],
  },

  'advanced-prompting-quiz': {
    slug: 'advanced-prompting-quiz',
    title: 'Advanced Prompting Path Review',
    pathTitle: 'Advanced Prompting for Reliable Output',
    pathSlug: 'advanced-prompting-reliable-output',
    duration: '8 min',
    order: 10,
    totalInPath: 10,
    prevLesson: 'building-your-prompt-library',
    nextLesson: null,
    type: 'quiz',
    blocks: [
      {
        type: 'text',
        heading: 'Review what you have built',
        body: "This review quiz covers the key techniques from the Advanced Prompting path — structured architecture, chain-of-thought, persona design, few-shot prompting, chaining, and prompt library building.",
      },
      {
        type: 'quiz',
        variant: 'better-prompt',
        question: 'You need AI to review a strategic proposal and give you genuinely critical feedback. Which prompt gets better results?',
        options: [
          { id: 'a', text: '"Review this proposal and give me feedback."', correct: false, explanation: 'No role, no output structure, no constraint on type of feedback. Will produce generic, probably positive commentary.' },
          { id: 'b', text: '"You are a senior strategy consultant who has evaluated 200+ proposals. Your job is to find the three most significant weaknesses in this proposal — the problems that would cause it to fail. Be direct and specific. Do not mention strengths unless directly relevant to a weakness. [paste proposal]"', correct: true, explanation: 'Strong persona designed to be critical, specific task (find weaknesses), explicit constraint (no generic positives), direct output request.' },
        ],
        correctExplanation: 'Exactly. Persona, task specificity, and constraints combine to produce genuinely useful critical feedback.',
        incorrectExplanation: 'Think about what structural components the first prompt is missing.',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You want AI to classify 50 customer emails into categories specific to your business. You have 5 already-classified examples for each category. What prompting technique is most effective?',
        options: [
          { id: 'a', text: 'Chain-of-thought — ask AI to reason through why each email fits a category', correct: false, explanation: 'Chain-of-thought helps with reasoning tasks. Classification with custom categories is a few-shot problem.' },
          { id: 'b', text: 'Few-shot prompting — show AI the classified examples before asking it to classify new ones', correct: true, explanation: 'Correct. Showing examples of classified emails communicates category nuance that descriptions alone miss.' },
          { id: 'c', text: 'Role prompting — assign AI the role of "expert email classifier"', correct: false, explanation: 'A role helps with tone and perspective. For custom categories, examples of correct classification are more informative than a job title.' },
        ],
        correctExplanation: 'Right. Custom classification is exactly where few-shot prompting adds the most value.',
        incorrectExplanation: 'Think about which technique teaches AI your specific categories most precisely.',
      },
      {
        type: 'quiz',
        variant: 'true-false',
        question: 'When writing a prompt library entry, the most important element is making the prompt as long and detailed as possible to cover every scenario.',
        options: [
          { id: 'true', text: 'True', correct: false, explanation: 'Prompt library entries should be precise and reusable, not exhaustive. Long prompts that try to cover everything become hard to use and maintain.' },
          { id: 'false', text: 'False', correct: true, explanation: 'Correct. Good prompt library entries use [variable] placeholders for what changes and keep the fixed structure tight and focused.' },
        ],
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'Chain-of-thought prompting is most valuable when:',
        options: [
          { id: 'a', text: 'You want a quick, simple answer to a factual question', correct: false, explanation: 'Chain-of-thought adds overhead for simple factual questions. Save it for complex reasoning tasks.' },
          { id: 'b', text: 'You need AI to reason through a complex analysis where you want to review the logic', correct: true, explanation: 'Correct. Chain-of-thought makes reasoning visible and auditable — most valuable for complex analysis and decisions.' },
          { id: 'c', text: 'You want to match a specific writing style', correct: false, explanation: 'Style matching is a few-shot prompting problem. Chain-of-thought is for reasoning quality.' },
        ],
        correctExplanation: 'Exactly. Complex reasoning with visible logic is the chain-of-thought sweet spot.',
        incorrectExplanation: 'Think about which prompting technique addresses each specific type of output challenge.',
      },
      {
        type: 'takeaway',
        items: [
          'Five techniques: structured architecture, chain-of-thought, persona design, few-shot, prompt chaining',
          'Each technique addresses a specific type of output challenge — choose deliberately',
          'Your prompt library makes all of these techniques accessible without rebuilding from scratch each time',
          'Precision and structure in prompting produces more reliable results than length or complexity',
        ],
      },
      {
        type: 'recap',
        items: [
          'You have completed Advanced Prompting for Reliable Output',
          'You now have a complete toolkit for producing reliable, consistent AI output',
          'Recommended next: Evaluating AI Output and Reducing Mistakes',
        ],
      },
    ],
  },

  // ============================================================
  // PATH: EVALUATING AI OUTPUT AND REDUCING MISTAKES
  // ============================================================

  'hallucination-detection-advanced': {
    slug: 'hallucination-detection-advanced',
    title: 'Detecting and Handling AI Hallucinations',
    pathTitle: 'Evaluating AI Output and Reducing Mistakes',
    pathSlug: 'evaluating-ai-output-reducing-mistakes',
    duration: '11 min',
    order: 1,
    totalInPath: 8,
    prevLesson: null,
    nextLesson: 'ai-quality-control-frameworks',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'The confidence problem',
        body: "If AI only sounded confident when it was correct, hallucinations would be easy to catch. But AI delivers incorrect information with the same confident, fluent, well-structured prose as correct information.\n\nThis makes hallucination detection a skill — not a passive observation. You cannot wait for AI to signal uncertainty. You have to know where and how to look.",
      },
      {
        type: 'text',
        heading: 'Where hallucinations are most likely',
        body: "Hallucination risk is highest when:\n\n1. Specific facts are involved — exact statistics, names, dates, figures\n2. AI is asked about niche or specialized topics with limited training data\n3. AI is asked about recent events (knowledge cutoff issues)\n4. The task involves citing sources, papers, or books\n5. AI is extrapolating beyond what it knows into plausible-sounding speculation\n6. The output is long and complex — errors are easier to hide in volume",
      },
      {
        type: 'checklist',
        title: 'Red flags to watch for in AI output',
        items: [
          'Specific numbers presented without a source (e.g. "43% of companies...")',
          'Named research studies or publications you cannot immediately verify',
          'Quotes attributed to specific people',
          'Suspiciously neat or round numbers in statistical claims',
          'Confident claims about very recent developments',
          'Internal inconsistencies — contradictions within the same output',
          'Output that fits your prompt narrative suspiciously perfectly',
        ],
      },
      {
        type: 'tip',
        title: 'The "too perfect" signal',
        body: "When AI output seems suspiciously perfect — every statistic supports your argument, every quote is exactly on-point — be more skeptical, not less. Hallucinated content often fits the prompt narrative suspiciously well because it was generated to fit, not because it was verified.",
        variant: 'warning',
      },
      {
        type: 'text',
        heading: 'Four verification approaches',
        body: "When something is important enough to verify:\n\n1. Direct search — look it up on a primary source\n2. Ask AI to explain its source — hallucinated facts often cannot be sourced and the model may acknowledge uncertainty\n3. Cross-check with another query — ask the same question differently; inconsistency is a red flag\n4. Tiered trust — treat AI output as a draft requiring verification, not a final source",
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You ask AI to write a report section citing industry statistics. The output includes five specific percentages. What is the right next step?',
        options: [
          { id: 'a', text: 'Use the statistics as-is — AI is generally accurate on industry data', correct: false, explanation: 'Industry statistics are high-risk for hallucination. Never use specific AI-generated statistics without verification.' },
          { id: 'b', text: 'Verify each statistic against a primary source before including it', correct: true, explanation: 'Correct. Specific statistics are among the highest-risk AI outputs. Each claim needs a verifiable primary source.' },
          { id: 'c', text: 'Ask AI to double-check its own statistics', correct: false, explanation: 'AI cannot reliably self-verify statistics. It may confidently restate the same hallucinated numbers.' },
        ],
        correctExplanation: 'Exactly right. Specific statistics require primary source verification before professional use.',
        incorrectExplanation: 'Consider the hallucination risk level for specific numerical claims.',
      },
      {
        type: 'takeaway',
        items: [
          'AI sounds equally confident whether right or wrong — detection is an active skill',
          'Hallucination risk is highest for statistics, citations, quotes, and recent events',
          'The "too perfect" signal: suspiciously neat output that fits the narrative too well',
          'Build a tiered verification approach: always verify Tier 1 (specific facts), spot-check Tier 2',
        ],
      },
      {
        type: 'recap',
        items: [
          'Know the high-risk categories: statistics, citations, quotes, recent events',
          'Use the red flag checklist before relying on AI output professionally',
          'Next: building quality control frameworks into your AI workflows',
        ],
      },
    ],
  },

  'ai-quality-control-frameworks': {
    slug: 'ai-quality-control-frameworks',
    title: 'AI Quality Control for Professional Work',
    pathTitle: 'Evaluating AI Output and Reducing Mistakes',
    pathSlug: 'evaluating-ai-output-reducing-mistakes',
    duration: '11 min',
    order: 2,
    totalInPath: 8,
    prevLesson: 'hallucination-detection-advanced',
    nextLesson: 'calibrating-trust-by-task-type',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'From ad hoc checking to systematic quality control',
        body: "Most people check AI output inconsistently — reviewing carefully when stakes feel high, skimming when they feel rushed. This inconsistency is where errors slip through.\n\nSystematic quality control replaces inconsistency with a deliberately designed review process. The goal is not to check everything — it is to check the right things efficiently, every time.",
      },
      {
        type: 'text',
        heading: 'The three-layer QC model',
        body: "Effective AI quality control works in three layers:\n\nLayer 1 — Plausibility check (30 seconds): Does this look right overall? Is the scope correct? Any obvious errors or omissions?\n\nLayer 2 — High-risk element review (5-10 minutes): Check the specific elements with highest error risk — statistics, citations, key claims, specific recommendations\n\nLayer 3 — Deep review (20+ minutes): For high-stakes output — read it carefully, verify all major claims, check logic and consistency\n\nMost professional AI use needs Layer 1 always and Layer 2 often. Layer 3 is reserved for genuinely high-stakes work.",
      },
      {
        type: 'example',
        label: 'Three-layer QC applied to a research brief',
        body: "Layer 1 (30 sec): Scan the brief — does it cover the right topic? Is it roughly the right length? Any glaring omissions?\n\nLayer 2 (8 min): Check the three statistics in the brief. Are the cited studies real? Does the 'key finding' accurately reflect the source? Does the recommendation follow logically from the data?\n\nLayer 3 (if this goes to the board): Read every claim. Verify against original sources. Check that the brief's narrative arc is accurate and not oversimplified.",
      },
      {
        type: 'checklist',
        title: 'Layer 2 QC checklist for professional AI output',
        items: [
          'Any specific statistic — does it have a verifiable source?',
          'Any named study or report — does it actually exist?',
          'Key recommendations — do they logically follow from the data presented?',
          'Scope completeness — has anything significant been missed or excluded without explanation?',
          'Internal consistency — do any two claims in the document contradict each other?',
          'Attribution accuracy — are quotes and positions attributed to the right people?',
        ],
      },
      {
        type: 'tip',
        title: 'Build QC into the workflow, not onto the end of it',
        body: "The most common QC failure is leaving review until the output is about to be used. By then, you are rushed and less likely to catch errors. Designate a specific review step in your workflow — before the output leaves your hands, not after.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You produce AI-assisted reports weekly. What is the most sustainable quality control approach?',
        options: [
          { id: 'a', text: 'Deep review every report, checking every claim', correct: false, explanation: 'Deep review of every report is unsustainable and likely to be abandoned. Reserve it for genuinely high-stakes output.' },
          { id: 'b', text: 'Use the three-layer model: quick scan always, focused check of high-risk elements regularly, deep review for high-stakes reports', correct: true, explanation: 'Exactly. Tiered QC is sustainable because the effort scales with the risk and stakes.' },
          { id: 'c', text: 'Skip review if the AI produced the output confidently without any errors messages', correct: false, explanation: 'AI confidence indicators (or their absence) are unreliable quality signals. The review process must be independent of how confident the AI seems.' },
        ],
        correctExplanation: 'Right. Tiered QC scales effort to risk — sustainable and effective.',
        incorrectExplanation: 'Think about what review approach you can actually maintain every week without burning out.',
      },
      {
        type: 'takeaway',
        items: [
          'Systematic QC beats inconsistent ad hoc checking — design the review process deliberately',
          'Three layers: quick plausibility check, focused high-risk review, full deep review',
          'Most work needs Layer 1 always and Layer 2 often — Layer 3 only for genuinely high stakes',
          'Build the review step into the workflow before the output is needed, not after',
        ],
      },
      {
        type: 'recap',
        items: [
          'Three-layer QC: plausibility check, high-risk element review, deep review',
          'Effort scales to stakes — sustainable and thorough',
          'Next: calibrating trust by task type to know when verification is truly necessary',
        ],
      },
    ],
  },

  'calibrating-trust-by-task-type': {
    slug: 'calibrating-trust-by-task-type',
    title: 'Calibrating Trust: When to Verify and When to Use',
    pathTitle: 'Evaluating AI Output and Reducing Mistakes',
    pathSlug: 'evaluating-ai-output-reducing-mistakes',
    duration: '9 min',
    order: 3,
    totalInPath: 8,
    prevLesson: 'ai-quality-control-frameworks',
    nextLesson: 'evaluating-ai-reasoning',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'Not everything needs equal scrutiny',
        body: "Over-verification is as harmful as under-verification. If you spend 20 minutes checking an AI-drafted email that goes to one colleague, you have eliminated the time advantage AI gives you. If you publish an AI-generated statistic without checking it, you risk serious professional harm.\n\nCalibration means matching your verification effort to the actual risk profile of each task.",
      },
      {
        type: 'text',
        heading: 'The trust calibration matrix',
        body: "Trust calibration depends on two factors:\n\n1. Error impact: What happens if this is wrong? (low = minor inconvenience, high = professional or financial consequence)\n2. Hallucination risk: How likely is this type of output to contain errors? (factual claims are high risk; general explanation is lower risk)\n\nMapping your task against these two factors tells you how much verification is appropriate.",
      },
      {
        type: 'example',
        label: 'Trust calibration in practice',
        body: "Low impact + low hallucination risk: AI drafts a friendly email to a colleague. Use it with a quick read.\n\nLow impact + higher risk: AI summarizes a long article for your own notes. Quick check for major misrepresentation.\n\nHigh impact + low hallucination risk: AI writes a training document explaining a well-known process. Review for accuracy and clarity.\n\nHigh impact + high hallucination risk: AI produces a report with statistics cited to specific studies for client delivery. Verify every claim independently before use.",
      },
      {
        type: 'checklist',
        title: 'High-trust tasks (minimal verification needed)',
        items: [
          'Drafting personal communications (emails, messages) that you will review anyway',
          'Brainstorming and idea generation — you are filtering the ideas yourself',
          'Explaining well-documented, stable concepts (not recent events)',
          'Reformatting or restructuring text you already wrote',
          'Tone adjustment and editing of your own drafts',
        ],
      },
      {
        type: 'checklist',
        title: 'Low-trust tasks (verification required)',
        items: [
          'Any specific statistics, numbers, or percentages',
          'Claims about what a specific person said or did',
          'Information about specific laws, regulations, or legal requirements',
          'Citations to specific studies, books, or reports',
          'Medical, financial, or safety-critical information',
          'Claims about recent events (post-training cutoff)',
        ],
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You use AI to draft talking points for a client presentation about your industry. Which element requires the highest level of verification?',
        options: [
          { id: 'a', text: 'The opening hook sentence that introduces the topic', correct: false, explanation: 'An opening hook is a writing and framing task — low hallucination risk. A quick read is sufficient.' },
          { id: 'b', text: 'A specific growth statistic cited to a named research firm', correct: true, explanation: 'Correct. Specific statistics attributed to named sources are the highest-risk element and must be verified before client presentation.' },
          { id: 'c', text: 'The general description of how the industry works', correct: false, explanation: 'General industry descriptions are typically well within AI training data. Standard review is sufficient.' },
        ],
        correctExplanation: 'Right. Specific statistics with named attributions in client-facing materials require independent verification.',
        incorrectExplanation: 'Apply the trust matrix: what is the impact of this being wrong AND how likely is this type of claim to be hallucinated?',
      },
      {
        type: 'takeaway',
        items: [
          'Calibrate verification effort to error impact AND hallucination risk — not to every output equally',
          'High trust: personal communications, brainstorming, well-documented explanations',
          'Low trust (always verify): statistics, citations, quotes, legal/medical/financial claims, recent events',
          'Over-verification eliminates the efficiency advantage of AI — calibration is necessary',
        ],
      },
      {
        type: 'recap',
        items: [
          'Trust calibration = match verification effort to impact × risk',
          'Two factors: error impact and hallucination risk for the specific content type',
          'Next: evaluating AI reasoning quality, not just factual content',
        ],
      },
    ],
  },

  'evaluating-ai-reasoning': {
    slug: 'evaluating-ai-reasoning',
    title: 'Evaluating AI Reasoning and Logic',
    pathTitle: 'Evaluating AI Output and Reducing Mistakes',
    pathSlug: 'evaluating-ai-output-reducing-mistakes',
    duration: '10 min',
    order: 4,
    totalInPath: 8,
    prevLesson: 'calibrating-trust-by-task-type',
    nextLesson: 'evaluation-path-quiz',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'Facts can be correct while reasoning is flawed',
        body: "Verifying specific facts is important — but it only catches one type of AI error. The other type is subtler and harder to detect: flawed reasoning.\n\nAI can state correct individual facts while drawing incorrect conclusions from them. It can present analysis that sounds logically coherent but contains hidden logical errors. Learning to evaluate reasoning, not just facts, makes you a significantly better AI user.",
      },
      {
        type: 'text',
        heading: 'Five common reasoning flaws in AI output',
        body: "1. False causation — 'B happened after A' becomes 'A caused B'\n2. Overgeneralization — one example becomes a universal rule\n3. False balance — presenting all positions as equally valid when they are not\n4. Omission bias — mentioning facts that support the conclusion, silently ignoring ones that do not\n5. Circular reasoning — the conclusion is assumed in the premises",
      },
      {
        type: 'example',
        label: 'Spotting flawed reasoning in AI output',
        body: "AI output: 'Companies that invested heavily in AI in 2023 saw average revenue growth of 18%. Therefore, AI investment drives revenue growth.'\n\nReasoning flaw: False causation. Companies that invested in AI may have done so because they were already growing and had the budget. The correlation does not establish that AI caused the growth.\n\nHow to catch it: Ask yourself 'Does this conclusion necessarily follow from the evidence?' rather than just 'Is the statistic accurate?'",
      },
      {
        type: 'checklist',
        title: 'Reasoning quality checklist for AI analysis',
        items: [
          'Does the conclusion actually follow from the evidence provided?',
          'Is correlation being presented as causation?',
          'Has anything important been left out that would change the conclusion?',
          'Are counterarguments or contradicting evidence acknowledged?',
          'Are generalizations supported by more than one example?',
          'Would a skeptical expert read this analysis and find it logically sound?',
        ],
      },
      {
        type: 'tip',
        title: 'Ask AI to steelman the counterargument',
        body: "One of the best reasoning quality checks: after AI produces an analysis or recommendation, ask it 'What is the strongest argument against this conclusion?' If the counterargument is stronger than the original analysis, the reasoning was weak. This technique turns AI into its own critic.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'AI produces an analysis concluding that your company should enter a new market. The facts it cites are all accurate. What additional check is most important before acting on this recommendation?',
        options: [
          { id: 'a', text: 'Check if the writing style is appropriate for the audience', correct: false, explanation: 'Style is secondary to reasoning quality when acting on a business recommendation.' },
          { id: 'b', text: 'Evaluate whether the conclusion logically follows from the facts, and whether significant counter-evidence was omitted', correct: true, explanation: 'Correct. Accurate facts with flawed reasoning can lead to badly wrong conclusions. Both must be evaluated.' },
          { id: 'c', text: 'Run the same analysis with a different AI model and compare outputs', correct: false, explanation: 'Multiple AI outputs may all share the same reasoning flaw. Human critical evaluation is more reliable than AI consensus.' },
        ],
        correctExplanation: 'Right. Logical validity of the reasoning is as important as factual accuracy.',
        incorrectExplanation: 'Think about what else can go wrong in AI analysis beyond factual errors.',
      },
      {
        type: 'takeaway',
        items: [
          'Facts can be correct while reasoning is flawed — evaluate both independently',
          'Five common reasoning flaws: false causation, overgeneralization, false balance, omission bias, circular reasoning',
          'Apply the reasoning checklist to any AI analysis before acting on it',
          'Ask AI to steelman the counterargument — it turns AI into its own critic',
        ],
      },
      {
        type: 'recap',
        items: [
          'Fact verification and reasoning evaluation are separate skills — you need both',
          'Use the steelman technique to expose weak reasoning before it affects decisions',
          'Next: path review quiz',
        ],
      },
    ],
  },

  'evaluation-path-quiz': {
    slug: 'evaluation-path-quiz',
    title: 'Evaluating AI Output Path Review',
    pathTitle: 'Evaluating AI Output and Reducing Mistakes',
    pathSlug: 'evaluating-ai-output-reducing-mistakes',
    duration: '7 min',
    order: 8,
    totalInPath: 8,
    prevLesson: 'evaluating-ai-reasoning',
    nextLesson: null,
    type: 'quiz',
    blocks: [
      {
        type: 'text',
        heading: 'Consolidate your evaluation skills',
        body: "This review quiz covers hallucination detection, quality control frameworks, trust calibration, and reasoning evaluation.",
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'Which type of AI output carries the highest hallucination risk?',
        options: [
          { id: 'a', text: 'An explanation of how photosynthesis works', correct: false, explanation: 'Well-documented, stable scientific concepts are lower risk — this information is well-represented in AI training data.' },
          { id: 'b', text: 'A specific statistic about industry adoption rates attributed to a named consultancy', correct: true, explanation: 'Correct. Specific statistics attributed to named sources are the highest hallucination risk category.' },
          { id: 'c', text: 'A suggested list of questions to ask in a meeting', correct: false, explanation: 'Generative suggestions (not factual claims) carry lower hallucination risk.' },
        ],
        correctExplanation: 'Exactly. Specific factual claims with attribution are the highest-risk AI outputs.',
        incorrectExplanation: 'Think about which output type requires something to be specifically and verifiably true — that is your highest-risk category.',
      },
      {
        type: 'quiz',
        variant: 'true-false',
        question: 'If an AI analysis contains accurate statistics, the conclusions drawn from those statistics can be trusted without further evaluation.',
        options: [
          { id: 'true', text: 'True', correct: false, explanation: 'False. Accurate facts can still produce flawed conclusions through bad reasoning — causation errors, omission bias, or overgeneralization.' },
          { id: 'false', text: 'False', correct: true, explanation: 'Correct. Factual accuracy and reasoning quality are separate evaluations. Facts can be correct while conclusions are wrong.' },
        ],
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You produce 15 AI-assisted documents per week. How should you approach quality control?',
        options: [
          { id: 'a', text: 'Deep review every document to ensure nothing gets through', correct: false, explanation: 'Deep reviewing 15 documents weekly is unsustainable and will be abandoned. Match effort to risk.' },
          { id: 'b', text: 'Use a tiered approach: quick scan all, focused review of high-risk elements in important documents, deep review only for high-stakes output', correct: true, explanation: 'Exactly. Tiered QC scales your effort to the actual risk of each document.' },
          { id: 'c', text: 'Skip review for documents that AI produced quickly with no error messages', correct: false, explanation: 'Speed and absence of error messages have no correlation with output accuracy. Always apply at least a quick scan.' },
        ],
        correctExplanation: 'Right. Tiered QC is both thorough and sustainable.',
        incorrectExplanation: 'Think about what approach you can actually maintain across 15 weekly documents.',
      },
      {
        type: 'takeaway',
        items: [
          'Hallucinations are most likely in specific factual claims, citations, and recent events',
          'Three-layer QC: plausibility check, high-risk review, deep review — scaled to stakes',
          'Calibrate verification effort to error impact and hallucination risk — not to every output equally',
          'Evaluate reasoning, not just facts — correct facts with flawed logic still produce wrong conclusions',
        ],
      },
      {
        type: 'recap',
        items: [
          'You have completed Evaluating AI Output and Reducing Mistakes',
          'You now have a complete system for professional-grade AI use',
          'Recommended next: MCP and Tool-Connected AI Basics',
        ],
      },
    ],
  },

  // ============================================================
  // PATH: MCP AND TOOL-CONNECTED AI BASICS
  // ============================================================

  'mcp-fundamentals-non-technical': {
    slug: 'mcp-fundamentals-non-technical',
    title: 'MCP Fundamentals for Non-Technical Users',
    pathTitle: 'MCP and Tool-Connected AI Basics',
    pathSlug: 'mcp-tool-connected-ai-basics',
    duration: '12 min',
    order: 1,
    totalInPath: 8,
    prevLesson: null,
    nextLesson: 'connecting-ai-to-your-tools',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'Why AI was limited by being isolated',
        body: "For most of its history, AI chat was isolated. It could only work with what you typed into the chat window. It could not read your files, check your calendar, look at your spreadsheets, or interact with any tool you actually work with.\n\nMCP — Model Context Protocol — is a standard that changes this. It creates a structured way for AI to connect to external tools and data sources.",
      },
      {
        type: 'text',
        heading: 'What MCP actually is',
        body: "MCP stands for Model Context Protocol. Anthropic introduced it in late 2024 and it has been rapidly adopted across the AI tool ecosystem.\n\nIn plain terms: MCP is a protocol — a set of rules — that lets AI systems communicate with external tools in a standardised way. Think of it like USB: any USB device connects to any USB port. MCP does the same for AI and external tools.\n\nBefore MCP, each AI tool had to build its own custom connections to each external service — like every device needing a different cable. MCP provides the universal standard.",
      },
      {
        type: 'example',
        label: 'What changes with MCP',
        weak: 'Without MCP: You copy data from your spreadsheet, paste it into AI, get an answer, copy the answer back. Repeat for every task.',
        strong: 'With MCP: AI can read your spreadsheet directly, perform the analysis in context, and write results back — without you copying anything.',
      },
      {
        type: 'checklist',
        title: 'What becomes possible with tool-connected AI',
        items: [
          'Ask AI to read a specific file without copying and pasting',
          'Have AI look up a customer record and draft a response based on real data',
          'Schedule a meeting by asking AI to check calendars and find a free slot',
          'Have AI produce a report that pulls live data from your systems',
          'Ask AI to search the web in real time and incorporate current information',
        ],
      },
      {
        type: 'tip',
        title: 'You may already be using MCP without knowing it',
        body: "If you use Claude with integrations, Cursor, or any enterprise AI tool that connects to your company data, you are likely already using MCP-powered connections. The question is whether you are using them intentionally.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'What is the primary value of MCP for everyday AI users?',
        options: [
          { id: 'a', text: 'It makes AI generate faster responses', correct: false, explanation: 'Speed is not what MCP addresses. It is about connectivity, not performance.' },
          { id: 'b', text: 'It creates a standard way for AI to connect to real tools and data sources', correct: true, explanation: 'Correct. MCP is a connectivity standard — it allows AI to access external tools and real data.' },
          { id: 'c', text: 'It only works for developers', correct: false, explanation: 'While MCP was created by developers, many MCP-powered tools are designed for non-technical users.' },
        ],
        correctExplanation: 'Exactly right. MCP makes AI a participant in your actual work environment, not just an isolated chat tool.',
        incorrectExplanation: 'Think about what the fundamental limitation of isolated AI chat was.',
      },
      {
        type: 'takeaway',
        items: [
          'MCP is a standard that lets AI connect to external tools and data sources',
          'It solves the isolation problem — AI becomes a participant in your actual work environment',
          'MCP servers expose specific tools to AI — files, calendars, databases, apps',
          'Always understand access scope before connecting AI to sensitive data',
        ],
      },
      {
        type: 'recap',
        items: [
          'MCP = universal standard for AI-to-tool connections',
          'Enables AI to read and write real data without manual copy-pasting',
          'Next: practical ways to connect AI to your actual tools',
        ],
      },
    ],
  },

  'connecting-ai-to-your-tools': {
    slug: 'connecting-ai-to-your-tools',
    title: 'Connecting AI to Your Data and Tools',
    pathTitle: 'MCP and Tool-Connected AI Basics',
    pathSlug: 'mcp-tool-connected-ai-basics',
    duration: '11 min',
    order: 2,
    totalInPath: 8,
    prevLesson: 'mcp-fundamentals-non-technical',
    nextLesson: 'mcp-security-and-access-control',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'From theory to practice',
        body: "Understanding MCP is useful. Knowing how to actually connect AI to your most valuable tools is where it becomes productive. This lesson covers the practical steps — how to identify what to connect, how connections typically work, and what to watch out for.",
      },
      {
        type: 'text',
        heading: 'The connection landscape in 2026',
        body: "The MCP ecosystem has grown rapidly. Common connections available today include:\n\n- File systems — AI reads documents, PDFs, spreadsheets from your local drive or cloud storage\n- Calendar and scheduling — AI reads availability and can draft or create events\n- Web search — AI queries the live web rather than relying on training data\n- Code repositories — AI reads and understands your codebase\n- Databases — AI queries records and returns structured data\n- Communication tools — Slack, email, and other messaging platforms\n- Productivity tools — Notion, Confluence, Google Workspace\n\nEach of these is available through MCP server implementations. Many popular AI tools now include these integrations with minimal setup.",
      },
      {
        type: 'checklist',
        title: 'How to choose what to connect first',
        items: [
          'What data source do you currently copy-paste into AI most frequently?',
          'What tool generates information you regularly need to act on?',
          'Where do you spend the most time manually moving data between systems?',
          'What real-time information would most change the quality of your AI-assisted work?',
          'What connection would eliminate the most friction in your current workflow?',
        ],
      },
      {
        type: 'example',
        label: 'Common high-value first connections',
        body: "Web search integration: AI can answer questions about current events, recent product releases, and live data — eliminating the knowledge cutoff problem for most research tasks.\n\nFile system: AI reads documents directly. Instead of copying 50 pages, you say 'read the Q3 report in my Documents folder and summarize the key findings.'\n\nCalendar: AI sees your schedule and can draft meeting summaries, prep briefings, and suggest times — without you sharing every detail manually.",
      },
      {
        type: 'tip',
        title: 'Start with read-only connections',
        body: "When first connecting AI to real tools, start with read-only access. AI that can read your data and provide analysis is very valuable. AI that can write, update, or delete adds significant power — but also significant risk if it misinterprets a task. Build confidence with read-only before extending write access.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You want to connect AI to your project management system for the first time. What is the safest starting configuration?',
        options: [
          { id: 'a', text: 'Give AI full read and write access so it can update tasks automatically', correct: false, explanation: 'Start with read-only. Full write access before you understand how the AI interprets tasks creates risk of unwanted changes.' },
          { id: 'b', text: 'Start with read-only access so AI can read project data and provide analysis without making changes', correct: true, explanation: 'Correct. Read-only connections give you the analysis benefits while you learn how the AI handles your data.' },
          { id: 'c', text: 'Do not connect AI to project management tools — it is too risky', correct: false, explanation: 'With appropriate access controls, connecting AI to project management tools can be very valuable. Risk is manageable.' },
        ],
        correctExplanation: 'Right. Read-only first is the smart starting configuration.',
        incorrectExplanation: 'Think about the risk difference between AI that reads and AI that writes to your systems.',
      },
      {
        type: 'takeaway',
        items: [
          'The MCP ecosystem now covers most common productivity tools and data sources',
          'Choose your first connection based on where you currently spend the most time manually moving data',
          'Start with read-only access — build confidence before extending write permissions',
          'High-value first connections: web search, file access, calendar integration',
        ],
      },
      {
        type: 'recap',
        items: [
          'Identify your highest-friction data handoff — that is your best first connection',
          'Read-only first, write access later',
          'Next: security and access control for tool-connected AI',
        ],
      },
    ],
  },

  'mcp-security-and-access-control': {
    slug: 'mcp-security-and-access-control',
    title: 'Security and Access Control for Connected AI',
    pathTitle: 'MCP and Tool-Connected AI Basics',
    pathSlug: 'mcp-tool-connected-ai-basics',
    duration: '10 min',
    order: 3,
    totalInPath: 8,
    prevLesson: 'connecting-ai-to-your-tools',
    nextLesson: 'mcp-path-quiz',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'Connectivity creates access responsibilities',
        body: "Every connection you give AI is also a potential exposure point. When AI can access your files, your calendar, your database, or your communication tools, the security and access questions that apply to any other software integration apply here too.\n\nThis is not a reason to avoid tool-connected AI. It is a reason to approach it with the same intentionality you bring to any important software decision.",
      },
      {
        type: 'text',
        heading: 'The five security questions to answer before connecting',
        body: "Before connecting AI to any data source:\n\n1. What can it access? Be specific — not 'my files' but which files, in which locations, with what permissions\n2. Can it write back? Read access is one risk profile; write access is a higher one\n3. What data does it send externally? Does the integration transmit your data to the AI provider's servers? Is that data used for model training?\n4. Who else can see this connection? If you are using a shared team tool, are other team members' data potentially exposed?\n5. Can I audit what it accessed? Is there a log of what the AI read or wrote?",
      },
      {
        type: 'checklist',
        title: 'Data that requires particular care before connecting',
        items: [
          'Personal identifiable information (customer data, employee records)',
          'Financial records and forecasts',
          'Confidential client documents and contracts',
          'Proprietary business information and trade secrets',
          'Healthcare or other regulated data',
          'Credentials, passwords, or authentication tokens',
        ],
      },
      {
        type: 'tip',
        title: 'Use the minimum necessary access principle',
        body: "Grant AI access to only what it actually needs for the task — nothing more. If you need AI to read project notes, give it access to the project notes folder, not your entire file system. Minimum necessary access limits exposure if something goes wrong.",
        variant: 'warning',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You want to connect your company CRM (customer relationship management system) to an AI tool to help draft client communications. What is the most important question to answer before proceeding?',
        options: [
          { id: 'a', text: 'Whether the AI tool has a good user interface', correct: false, explanation: 'UI quality is irrelevant to the security question of connecting customer data to an AI service.' },
          { id: 'b', text: 'Whether the integration transmits customer data to the AI provider and how that data is handled', correct: true, explanation: 'Correct. Customer data in a CRM is sensitive. Understanding data transmission and handling is the critical security question.' },
          { id: 'c', text: 'Whether the AI can write back to the CRM automatically', correct: false, explanation: 'Write-back capability is a useful follow-up question, but the primary security question is about data transmission and handling.' },
        ],
        correctExplanation: 'Exactly. Data handling transparency is the most critical question for any connection involving sensitive information.',
        incorrectExplanation: 'Think about what the primary risk is when connecting a system containing customer data to an external AI service.',
      },
      {
        type: 'takeaway',
        items: [
          'Every AI connection is an access relationship — approach it with the same intentionality as any software integration',
          'Five questions: what can it access, can it write, where does data go, who else is affected, can you audit it',
          'Use minimum necessary access — grant only what the task actually requires',
          'Sensitive data (customer records, financials, credentials) requires the highest level of scrutiny before connection',
        ],
      },
      {
        type: 'recap',
        items: [
          'Connectivity without security thinking creates risk',
          'Minimum necessary access is the guiding principle',
          'Next: path review quiz',
        ],
      },
    ],
  },

  'mcp-path-quiz': {
    slug: 'mcp-path-quiz',
    title: 'MCP and Tool-Connected AI Path Review',
    pathTitle: 'MCP and Tool-Connected AI Basics',
    pathSlug: 'mcp-tool-connected-ai-basics',
    duration: '7 min',
    order: 8,
    totalInPath: 8,
    prevLesson: 'mcp-security-and-access-control',
    nextLesson: null,
    type: 'quiz',
    blocks: [
      {
        type: 'text',
        heading: 'Review your MCP foundations',
        body: "This quiz covers the key concepts from the MCP path: what MCP is, how connections work, what to connect first, and how to handle access and security.",
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'In simple terms, what does MCP (Model Context Protocol) do?',
        options: [
          { id: 'a', text: 'It makes AI models smarter', correct: false, explanation: 'MCP does not affect model intelligence — it provides a standard way for models to connect to external tools and data.' },
          { id: 'b', text: 'It provides a standard way for AI to connect to external tools and data sources', correct: true, explanation: 'Correct. MCP is a connectivity standard — like USB for AI-to-tool connections.' },
          { id: 'c', text: 'It stores your conversation history permanently', correct: false, explanation: 'Conversation storage is a separate feature from MCP connectivity.' },
        ],
        correctExplanation: 'Exactly. MCP is a connectivity standard that removes the isolation limitation of standard AI chat.',
        incorrectExplanation: 'Review the first lesson — MCP addresses the isolation problem in AI.',
      },
      {
        type: 'quiz',
        variant: 'true-false',
        question: 'When first connecting AI to a critical business system, you should start with full read and write access to maximize usefulness.',
        options: [
          { id: 'true', text: 'True', correct: false, explanation: 'Start with read-only access. Full write access on first connection increases risk significantly. Build confidence progressively.' },
          { id: 'false', text: 'False', correct: true, explanation: 'Correct. Start with read-only access and expand permissions only after you understand how the AI handles your data.' },
        ],
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You are deciding which tool to connect to AI first. Which factor should most guide your decision?',
        options: [
          { id: 'a', text: 'The tool with the most impressive MCP integration features', correct: false, explanation: 'Feature impressiveness is not the right criterion. High personal value and manageable risk is.' },
          { id: 'b', text: 'The tool where you currently spend the most time manually moving data into AI', correct: true, explanation: 'Correct. Connecting where friction is highest produces the most immediate value.' },
          { id: 'c', text: 'The tool that contains the most sensitive data', correct: false, explanation: 'Most sensitive data = highest security requirements = worst starting point. Start where friction is high but sensitivity is manageable.' },
        ],
        correctExplanation: 'Right. High friction, manageable sensitivity is the best starting point.',
        incorrectExplanation: 'Think about where a connection would eliminate the most wasted time in your current workflow.',
      },
      {
        type: 'takeaway',
        items: [
          'MCP = universal AI-to-tool connectivity standard',
          'Start connections with read-only access and minimum necessary scope',
          'Highest-value first connections: where you currently move data manually most often',
          'Always answer the five security questions before connecting sensitive data sources',
        ],
      },
      {
        type: 'recap',
        items: [
          'You have completed MCP and Tool-Connected AI Basics',
          'You can now connect AI to real tools intelligently and safely',
          'Recommended next: AI Automation for Knowledge Workers',
        ],
      },
    ],
  },

  // ============================================================
  // PATH: AI RESEARCH AND SYNTHESIS WORKFLOWS
  // ============================================================

  'ai-research-synthesis-intro': {
    slug: 'ai-research-synthesis-intro',
    title: 'Using AI for Research and Synthesis',
    pathTitle: 'AI Research and Synthesis Workflows',
    pathSlug: 'ai-research-synthesis-workflows',
    duration: '11 min',
    order: 1,
    totalInPath: 8,
    prevLesson: null,
    nextLesson: 'document-analysis-workflow',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'Research has a new shape',
        body: "Traditional research looked like this: define questions, search for sources, read sources, take notes, compare and contrast, synthesize, write up. Each step was time-intensive and mostly manual.\n\nAI does not eliminate this process — but it dramatically changes the speed and scale at which each step operates. With the right workflow, you can process in hours what used to take days, while maintaining quality and accuracy.",
      },
      {
        type: 'checklist',
        title: 'The AI research workflow: five stages',
        items: [
          '1. Define: Clarify exactly what questions you are trying to answer',
          '2. Gather: Use AI to help identify relevant sources and extract key content',
          '3. Extract: Prompt AI to pull specific categories of information from each source',
          '4. Synthesize: Ask AI to identify patterns, contradictions, and gaps across sources',
          '5. Verify: Manually check all specific claims, statistics, and citations before using',
        ],
      },
      {
        type: 'example',
        label: 'Research prompt that works',
        weak: 'Tell me about the state of AI adoption in enterprise.',
        strong: 'I am researching enterprise AI adoption for a strategic briefing. From the text I am about to paste, please: (1) extract the 3-5 most significant findings, (2) identify any specific statistics with their source years, (3) note any contradictions or caveats the authors mention, and (4) flag anything that seems like it might be outdated. Here is the text: [paste document]',
      },
      {
        type: 'tip',
        title: 'AI as a research accelerator, not a research replacement',
        body: "The most reliable research workflows use AI to go faster and cover more ground — not to skip the human judgement that determines what is accurate and relevant. Think of AI as a very fast, very thorough junior researcher who does the heavy lifting and brings you the most important things to look at.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You are synthesizing research from four different reports. What should you explicitly ask AI to do that most people forget?',
        options: [
          { id: 'a', text: 'Write the synthesis in a formal, academic style', correct: false, explanation: 'Style matters, but it is not the critical thing to ask for in synthesis work.' },
          { id: 'b', text: 'Note contradictions and disagreements between sources, not just areas of agreement', correct: true, explanation: 'Exactly. AI naturally tends to smooth over contradictions. You have to explicitly ask it to surface disagreements.' },
          { id: 'c', text: 'Make the synthesis as short as possible', correct: false, explanation: 'Brevity is a preference, not the critical quality question for synthesis work.' },
        ],
        correctExplanation: 'Correct. Synthesis quality depends on capturing tension and contradiction, not just consensus.',
        incorrectExplanation: 'Think about what the most common failure mode of AI synthesis is.',
      },
      {
        type: 'takeaway',
        items: [
          'AI accelerates research by enabling faster extraction, pattern-finding, and synthesis drafting',
          'Use the five-stage workflow: Define, Gather, Extract, Synthesize, Verify',
          'Explicitly ask AI to surface contradictions — it defaults to smoothing them over',
          'Treat AI output as a strong first draft that requires your domain judgement and verification',
        ],
      },
      {
        type: 'recap',
        items: [
          'AI is a research accelerator — you still apply the judgement',
          'Five stages: Define, Gather, Extract, Synthesize, Verify',
          'Always ask for contradictions and caveats, not just synthesis',
        ],
      },
    ],
  },

  'document-analysis-workflow': {
    slug: 'document-analysis-workflow',
    title: 'AI Document Analysis in Practice',
    pathTitle: 'AI Research and Synthesis Workflows',
    pathSlug: 'ai-research-synthesis-workflows',
    duration: '10 min',
    order: 2,
    totalInPath: 8,
    prevLesson: 'ai-research-synthesis-intro',
    nextLesson: 'multi-source-synthesis-workflow',
    type: 'practice',
    blocks: [
      {
        type: 'text',
        heading: 'Documents are the most common research challenge',
        body: "For most knowledge workers, the bulk of research involves working through documents: reports, contracts, research papers, meeting transcripts, competitive briefs, policy documents. These are often long, dense, and structured in ways that make extracting specific information time-consuming.\n\nAI is particularly strong at document work — but the quality of your extraction depends heavily on how you ask.",
      },
      {
        type: 'text',
        heading: 'The anatomy of a strong document analysis prompt',
        body: "A strong document analysis prompt specifies four things:\n\n1. What to look for — specific categories, not 'summarize everything'\n2. What format the output should take — bullet points, table, structured notes\n3. What to flag or highlight specifically — risks, contradictions, uncertainties\n4. What to ignore — sections or types of content not relevant to your goal\n\nVague document analysis prompts produce shallow, generic summaries. Specific extraction prompts produce structured, usable intelligence.",
      },
      {
        type: 'example',
        label: 'Generic vs structured document analysis',
        weak: '"Summarize this 30-page supplier agreement." → AI produces a 5-paragraph summary that misses the most relevant clauses for your situation.',
        strong: '"From this supplier agreement, extract and organize the following into a structured table: (1) All payment terms including due dates and late fees. (2) All liability caps and indemnification clauses. (3) Any automatic renewal or exit conditions. (4) Any data handling or IP ownership clauses. Flag anything that appears unusual compared to standard commercial terms."',
      },
      {
        type: 'checklist',
        title: 'What to extract vs what to summarize',
        items: [
          'EXTRACT (specific, structured): key figures, dates, clauses, decisions, action items, named parties, specific commitments',
          'SUMMARIZE (narrative): overall purpose, main argument, general findings, narrative arc',
          'FLAG (exceptions): anything unusual, contradictory, missing, or higher-risk than expected',
          'SKIP (usually): boilerplate, standard legal language, redundant restatements',
        ],
      },
      {
        type: 'tip',
        title: 'Work section by section for long documents',
        body: "For very long documents (50+ pages), extract section by section rather than all at once. This produces more detailed analysis per section and avoids context window limitations. Then use a final synthesis prompt to combine section extractions into an overall picture.",
        variant: 'tip',
      },
      {
        type: 'practice',
        title: 'Apply structured document extraction',
        instruction: 'Find a long document relevant to your work — a report, contract, policy document, or research paper. Define exactly what categories of information you need from it. Write a structured extraction prompt using the four-element framework above and run it. Compare the output to what a generic "summarize this" prompt would have produced.',
        prompt: 'Extraction prompt template:\n"From the following document, extract and organize:\n1. [Category 1: what to find and how to format it]\n2. [Category 2: what to find and how to format it]\n3. [Category 3: what to find and how to format it]\nAlso flag: [what unusual elements to highlight]\nIgnore: [what to skip]\n\n[Paste document]"',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You need to extract key risk factors from a 60-page due diligence report. What is the most effective approach?',
        options: [
          { id: 'a', text: 'Ask AI to summarize the whole report in a few paragraphs', correct: false, explanation: 'A general summary will not reliably surface all key risk factors from a long document. Structured extraction is more reliable.' },
          { id: 'b', text: 'Use a structured extraction prompt specifying risk categories and output format, working section by section', correct: true, explanation: 'Correct. Structured extraction by category, section by section, produces the most complete and organized risk picture.' },
          { id: 'c', text: 'Read the report yourself and only use AI for the final summary', correct: false, explanation: 'AI-assisted extraction saves significant time and can surface patterns across the document you might miss when reading.' },
        ],
        correctExplanation: 'Right. Structured extraction by category is the professional approach for long documents.',
        incorrectExplanation: 'Think about what produces the most complete and organized extraction of a specific type of content.',
      },
      {
        type: 'takeaway',
        items: [
          'Specify extraction categories, not just "summarize" — you get structured, usable output',
          'Four elements in a strong document prompt: what to extract, output format, what to flag, what to ignore',
          'Work section by section for long documents — context quality beats context quantity',
          'The extract/summarize/flag distinction helps you get different types of document intelligence',
        ],
      },
      {
        type: 'recap',
        items: [
          'Structured extraction beats generic summarization for document work',
          'Specify categories, format, flags, and exclusions in every document prompt',
          'Next: synthesizing findings across multiple documents',
        ],
      },
    ],
  },

  'multi-source-synthesis-workflow': {
    slug: 'multi-source-synthesis-workflow',
    title: 'Synthesizing Research Across Multiple Sources',
    pathTitle: 'AI Research and Synthesis Workflows',
    pathSlug: 'ai-research-synthesis-workflows',
    duration: '11 min',
    order: 3,
    totalInPath: 8,
    prevLesson: 'document-analysis-workflow',
    nextLesson: 'research-path-quiz',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'The hardest part of research',
        body: "Finding information is not the hard part. Combining information from multiple sources into an accurate, non-contradictory synthesis — that is the hard part. It is where oversimplification, omission, and false consensus most often enter research work.\n\nAI is powerful at synthesis but prone to exactly these errors if not carefully directed. This lesson covers how to use AI for multi-source synthesis without losing the nuance that makes the work valuable.",
      },
      {
        type: 'text',
        heading: 'The three synthesis failure modes',
        body: "When AI synthesizes multiple sources, it tends to fail in three predictable ways:\n\n1. Consensus smoothing — presenting the average or majority position without acknowledging that a minority position exists\n2. False precision — combining approximate figures from different methodologies into a single confident claim\n3. Chronological flattening — treating sources from different time periods as if they all describe the current state\n\nKnowing these failure modes helps you prompt around them.",
      },
      {
        type: 'example',
        label: 'Multi-source synthesis prompt that surfaces nuance',
        weak: '"Here are five reports on remote work productivity. What do they collectively say?" → AI produces a smooth, confident consensus that erases important disagreements between studies.',
        strong: '"Here are extractions from five reports on remote work productivity. Please: (1) Identify the main finding each report reaches on productivity impact. (2) Note where reports agree. (3) Explicitly note where reports disagree or reach different conclusions — do not smooth these over. (4) Flag any reports from before 2022 that may reflect pre-pandemic rather than current conditions. (5) Identify the most important remaining question that these reports do not answer."',
      },
      {
        type: 'checklist',
        title: 'What to always ask for in multi-source synthesis',
        items: [
          'Areas of agreement across sources',
          'Areas of disagreement or contradiction — explicitly, not smoothed over',
          'The date range of sources — flag anything that may be outdated',
          'The quality or type difference between sources (meta-analysis vs single study vs opinion piece)',
          'What the combined sources do NOT answer — remaining gaps',
          'Any important source that seems to be missing from the synthesis',
        ],
      },
      {
        type: 'tip',
        title: 'Extract before synthesizing',
        body: "The most reliable synthesis workflow: extract key findings from each source separately first, then give AI all the extractions and ask for synthesis. This produces more accurate and more nuanced synthesis than giving AI all the raw documents at once.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'true-false',
        question: 'When synthesizing research from five sources, the best approach is to give AI all five documents at once and ask for a single comprehensive synthesis.',
        options: [
          { id: 'true', text: 'True', correct: false, explanation: 'All-at-once synthesis often produces shallow results and consensus smoothing. Extract each source separately first, then synthesize the extractions.' },
          { id: 'false', text: 'False', correct: true, explanation: 'Correct. Extract from each source separately first, then synthesize. This produces deeper per-source analysis and more accurate multi-source synthesis.' },
        ],
      },
      {
        type: 'takeaway',
        items: [
          'Synthesis failure modes: consensus smoothing, false precision, chronological flattening',
          'Always ask AI to explicitly note disagreements — never let it smooth them over',
          'Extract from each source separately, then synthesize the extractions for best results',
          'Ask for gaps as well as findings — what the sources collectively do NOT answer',
        ],
      },
      {
        type: 'recap',
        items: [
          'Good synthesis surfaces tension and contradiction, not just consensus',
          'Extract separately, synthesize the extractions — reliable two-step approach',
          'Next: path review quiz',
        ],
      },
    ],
  },

  'research-path-quiz': {
    slug: 'research-path-quiz',
    title: 'Research and Synthesis Path Review',
    pathTitle: 'AI Research and Synthesis Workflows',
    pathSlug: 'ai-research-synthesis-workflows',
    duration: '7 min',
    order: 8,
    totalInPath: 8,
    prevLesson: 'multi-source-synthesis-workflow',
    nextLesson: null,
    type: 'quiz',
    blocks: [
      {
        type: 'text',
        heading: 'Review your research workflow skills',
        body: "This quiz covers the key techniques from the Research and Synthesis path: the five-stage workflow, document analysis, and multi-source synthesis.",
      },
      {
        type: 'quiz',
        variant: 'better-prompt',
        question: 'You need to extract key risks from a 45-page financial report. Which prompt approach is more effective?',
        options: [
          { id: 'a', text: '"Summarize this financial report."', correct: false, explanation: 'A general summary will not reliably surface all key risks and will not produce the structured output you need.' },
          { id: 'b', text: '"From this financial report, extract in a structured table: (1) All mentioned risk factors, (2) Any forward-looking statements that may indicate uncertainty, (3) Any unusual items compared to prior periods, (4) All figures that require verification against external sources. Ignore introductory and boilerplate sections."', correct: true, explanation: 'Structured extraction by category, with explicit output format and exclusions, produces a complete and organized risk picture.' },
        ],
        correctExplanation: 'Exactly. Structured extraction with defined categories beats generic summarization for document analysis.',
        incorrectExplanation: 'Think about which approach gives you the specific information you need in a usable form.',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You are synthesizing five research papers on the same topic. Before giving AI all five papers, what should you do first?',
        options: [
          { id: 'a', text: 'Ask AI to produce a synthesis directly from all five papers', correct: false, explanation: 'All-at-once synthesis produces shallower per-source analysis and is more prone to consensus smoothing.' },
          { id: 'b', text: 'Extract key findings from each paper separately, then give AI the five extractions for synthesis', correct: true, explanation: 'Correct. The extract-then-synthesize approach produces more accurate and nuanced multi-source synthesis.' },
          { id: 'c', text: 'Only use the most recent paper to avoid contradictions', correct: false, explanation: 'Discarding older papers loses valuable context and comparative information. The goal is to surface contradictions, not eliminate them.' },
        ],
        correctExplanation: 'Right. Extract separately, then synthesize the extractions — the reliable two-step approach.',
        incorrectExplanation: 'Think about what produces the most thorough per-source analysis before combining.',
      },
      {
        type: 'quiz',
        variant: 'true-false',
        question: 'When using AI to synthesize conflicting research, the best output is one that presents a single clear consensus view, smoothing over minor disagreements.',
        options: [
          { id: 'true', text: 'True', correct: false, explanation: 'A smooth consensus that hides disagreements can lead to overconfident conclusions. Good synthesis explicitly surfaces contradictions.' },
          { id: 'false', text: 'False', correct: true, explanation: 'Correct. Good synthesis explicitly notes where sources disagree. Disagreement is important information, not a problem to smooth over.' },
        ],
      },
      {
        type: 'takeaway',
        items: [
          'Five-stage workflow: Define, Gather, Extract, Synthesize, Verify',
          'Structured extraction produces far better document analysis than generic summarization',
          'Extract-then-synthesize beats all-at-once for multi-source work',
          'Explicitly request contradictions, gaps, and date-range context in all synthesis',
        ],
      },
      {
        type: 'recap',
        items: [
          'You have completed AI Research and Synthesis Workflows',
          'You now have a complete system for fast, reliable AI-assisted research',
          'Recommended next: Multimodal AI for Real Work',
        ],
      },
    ],
  },

  // ============================================================
  // PATH: MULTIMODAL AI FOR REAL WORK
  // ============================================================

  'multimodal-ai-intro': {
    slug: 'multimodal-ai-intro',
    title: 'What Is Multimodal AI and Why It Matters',
    pathTitle: 'Multimodal AI for Real Work',
    pathSlug: 'multimodal-ai-real-work',
    duration: '9 min',
    order: 1,
    totalInPath: 8,
    prevLesson: null,
    nextLesson: 'analyzing-documents-with-ai',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'The world is not text-only',
        body: "Most AI tools launched with text-in, text-out capabilities. But the information you work with every day is rarely pure text — it is images, charts, screenshots, scanned documents, PDFs, and mixed-format files.\n\nMultimodal AI — AI that can process multiple types of content — closes the gap between AI capability and real-world work.",
      },
      {
        type: 'text',
        heading: 'What multimodal AI can do today',
        body: "In 2026, the leading AI models can:\n\n- Read and extract information from images\n- Analyze charts and graphs and explain what they show\n- Process scanned documents and PDFs with complex formatting\n- Identify objects, text, and structure in screenshots\n- Compare visual content and describe differences\n- Work with audio transcription\n\nFor everyday work, the most practical capabilities are document understanding, image analysis, and mixed-format processing.",
      },
      {
        type: 'checklist',
        title: 'Best practical uses of multimodal AI',
        items: [
          'Extracting data from tables, forms, or reports in image format',
          'Analyzing charts and graphs without manually transcribing data',
          'Processing PDFs or scanned documents that cannot be copy-pasted',
          'Reviewing screenshots of interfaces or dashboards',
          'Comparing before-and-after images to identify changes',
          'Getting feedback on visual content like presentations or designs',
        ],
      },
      {
        type: 'tip',
        title: 'Image quality matters significantly',
        body: "When working with images and documents, quality affects output quality. Blurry screenshots, low-resolution scans, or images with poor contrast produce less accurate results. Use the highest resolution version available.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You receive a scanned PDF of a 12-page research report that cannot be copy-pasted. What is the most efficient approach to extract key findings?',
        options: [
          { id: 'a', text: 'Manually type out the key sections before asking AI to analyze', correct: false, explanation: 'Unnecessary with multimodal AI. You can upload the PDF directly.' },
          { id: 'b', text: 'Upload the document to a multimodal AI that accepts file input and ask for the key findings', correct: true, explanation: 'Correct. Multimodal AI can process the document directly — no manual transcription needed.' },
          { id: 'c', text: 'This type of task is not possible with AI', correct: false, explanation: 'Processing scanned PDFs is a core multimodal AI capability in 2026.' },
        ],
        correctExplanation: 'Exactly. Upload directly — no manual transcription needed.',
        incorrectExplanation: 'Think about what multimodal AI can accept as input.',
      },
      {
        type: 'takeaway',
        items: [
          'Multimodal AI can process text, images, documents, and mixed-format content',
          'Key practical uses: document extraction, chart analysis, screenshot review, PDF processing',
          'Image quality directly affects output quality — use the best resolution available',
          'Multimodal AI removes the need to manually transcribe content before processing',
        ],
      },
      {
        type: 'recap',
        items: [
          'Multimodal AI = AI that handles text, images, documents, and more',
          'Most practical for: document analysis, chart reading, screenshot processing',
          'Next: specific workflows for analyzing documents and PDFs',
        ],
      },
    ],
  },

  'analyzing-documents-with-ai': {
    slug: 'analyzing-documents-with-ai',
    title: 'Analyzing Visual Documents and Charts',
    pathTitle: 'Multimodal AI for Real Work',
    pathSlug: 'multimodal-ai-real-work',
    duration: '10 min',
    order: 2,
    totalInPath: 8,
    prevLesson: 'multimodal-ai-intro',
    nextLesson: 'multimodal-path-quiz',
    type: 'practice',
    blocks: [
      {
        type: 'text',
        heading: 'Charts and visual data: AI as instant analyst',
        body: "Charts, graphs, and dashboards convey information visually that would take significant time to read and extract manually. Multimodal AI can look at a chart and tell you what it shows — often in seconds.\n\nBut like all AI output, the quality depends on how you ask. Vague requests produce vague analysis. Specific analytical questions produce targeted, useful insights.",
      },
      {
        type: 'example',
        label: 'Vague vs analytical chart prompts',
        weak: '"What does this chart show?" → AI describes the chart literally — axes, labels, general trend.',
        strong: '"This chart shows our monthly sales by region over 12 months. Please: (1) Identify the 2 regions with the strongest and weakest trend, (2) Flag any months that appear anomalous compared to the surrounding trend, (3) Identify what the chart does NOT show that would be important for a sales review." → Produces targeted analytical insight.',
      },
      {
        type: 'checklist',
        title: 'Questions to ask about visual data',
        items: [
          'What is the overall trend — growing, declining, flat, variable?',
          'Are there anomalies or outliers? What months or data points stand out?',
          'What comparison is the chart designed to show — and does it show it clearly?',
          'What would be most important to highlight for a specific audience (e.g. leadership, clients)?',
          'What does this chart not show that would be important to know?',
        ],
      },
      {
        type: 'tip',
        title: 'Ask about limitations, not just findings',
        body: "One of the most underused multimodal analysis prompts: 'What does this chart fail to show that would be important for a complete picture?' AI can often identify misleading scales, missing context, cherry-picked time periods, and other visual design limitations that could lead to wrong conclusions.",
        variant: 'tip',
      },
      {
        type: 'practice',
        title: 'Analyze a chart from your own work',
        instruction: 'Find a chart or graph from a report, dashboard, or presentation in your current work. Upload it to a multimodal AI and ask both a descriptive question ("what does this show?") and an analytical question ("what are the 2 most important insights and what does this chart fail to show?"). Compare the quality and usefulness of the two responses.',
        prompt: 'Analytical prompt template: "[Describe what the chart is about]. Please: (1) Identify the [2-3] most important insights from this data. (2) Flag any data points that appear anomalous or require further investigation. (3) Identify what this chart does not show that would be important for [describe your purpose]."',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You need to extract data from a complex table in a scanned PDF. The PDF cannot be copy-pasted. What is the most reliable approach?',
        options: [
          { id: 'a', text: 'Manually transcribe the table data before asking AI to analyze it', correct: false, explanation: 'Unnecessary with multimodal AI. Direct image upload is faster and avoids transcription errors.' },
          { id: 'b', text: 'Upload the PDF to a multimodal AI with a structured extraction prompt specifying what data to find', correct: true, explanation: 'Correct. Multimodal AI can read the table directly. A structured prompt ensures you get organized, usable output.' },
          { id: 'c', text: 'Ask AI to estimate the data from the general appearance of the table', correct: false, explanation: 'Estimation is not extraction. Provide the actual document and ask for specific extraction.' },
        ],
        correctExplanation: 'Right. Direct upload with a structured extraction prompt is the most efficient and accurate approach.',
        incorrectExplanation: 'Think about what multimodal AI can do directly with document images.',
      },
      {
        type: 'takeaway',
        items: [
          'Ask analytical questions, not just descriptive ones — the chart interpretation improves dramatically',
          'Ask about what a chart fails to show — this surfaces limitations that could affect decisions',
          'Structured extraction prompts for tables produce organized, usable output without manual transcription',
          'Multimodal analysis of dashboards and reports can replace significant manual data review time',
        ],
      },
      {
        type: 'recap',
        items: [
          'Visual AI analysis works best with specific analytical questions, not just "describe this"',
          'Always ask what the chart does NOT show — surfaces hidden limitations',
          'Next: path review quiz',
        ],
      },
    ],
  },

  'multimodal-path-quiz': {
    slug: 'multimodal-path-quiz',
    title: 'Multimodal AI Path Review',
    pathTitle: 'Multimodal AI for Real Work',
    pathSlug: 'multimodal-ai-real-work',
    duration: '6 min',
    order: 8,
    totalInPath: 8,
    prevLesson: 'analyzing-documents-with-ai',
    nextLesson: null,
    type: 'quiz',
    blocks: [
      {
        type: 'text',
        heading: 'Review your multimodal skills',
        body: "This quiz covers the key concepts from the Multimodal AI path.",
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You receive a scanned form with handwritten data. What limitation should you anticipate?',
        options: [
          { id: 'a', text: 'AI cannot process scanned documents at all', correct: false, explanation: 'AI can process scanned documents — it is one of the most useful multimodal capabilities.' },
          { id: 'b', text: 'Handwritten content is harder for AI than printed text — expect some errors and verify important data', correct: true, explanation: 'Correct. Handwriting recognition is less reliable than printed text recognition. Critical data points should be verified.' },
          { id: 'c', text: 'Scanned forms always work perfectly with any AI tool', correct: false, explanation: 'Image quality, handwriting, and complex layouts all affect extraction accuracy. Verification is important for critical data.' },
        ],
        correctExplanation: 'Right. Handwriting introduces uncertainty — verify important extracted data.',
        incorrectExplanation: 'Think about what factors affect multimodal AI accuracy.',
      },
      {
        type: 'quiz',
        variant: 'better-prompt',
        question: 'You want insight from a bar chart showing quarterly revenue by product line. Which prompt extracts more value?',
        options: [
          { id: 'a', text: '"What does this chart show?"', correct: false, explanation: 'This produces a literal description, not the analytical insight you need for business decisions.' },
          { id: 'b', text: '"This chart shows quarterly revenue by product line for 2025. Identify: (1) which product line has the strongest growth trend, (2) which is declining, (3) any quarter where overall performance appears anomalous, and (4) what this chart does not show that would be important for a revenue review."', correct: true, explanation: 'Analytical framing, specific questions, and asking about limitations produces genuinely useful business insight.' },
        ],
        correctExplanation: 'Exactly. Analytical questions extract genuine insight; descriptive questions extract description.',
        incorrectExplanation: 'Think about what type of output you actually need from chart analysis.',
      },
      {
        type: 'takeaway',
        items: [
          'Multimodal AI handles text, images, PDFs, charts, and screenshots',
          'Ask analytical questions, not just descriptive ones',
          'Ask what a visual does NOT show — this surfaces important limitations',
          'Verify critical extracted data, especially from handwritten or low-quality images',
        ],
      },
      {
        type: 'recap',
        items: [
          'You have completed Multimodal AI for Real Work',
          'You can now process documents, images, and mixed-format content efficiently',
          'Recommended next: AI Automation for Knowledge Workers',
        ],
      },
    ],
  },

  // ============================================================
  // PATH: AI AUTOMATION FOR KNOWLEDGE WORKERS
  // ============================================================

  'automation-mapping-intro': {
    slug: 'automation-mapping-intro',
    title: 'Mapping Your Automation Opportunities',
    pathTitle: 'AI Automation for Knowledge Workers',
    pathSlug: 'ai-automation-knowledge-workers',
    duration: '10 min',
    order: 1,
    totalInPath: 8,
    prevLesson: null,
    nextLesson: 'first-automation-workflow',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'The repetition hiding in your day',
        body: "Most knowledge workers spend 20–40% of their time on tasks they do repeatedly in the same or nearly the same way. Writing similar emails, summarizing similar content, producing similar reports, reformatting similar data.\n\nAI automation is most valuable when it targets this repetition. Not the creative, strategic, or relational parts of your work — but the mechanical patterns that happen every week.",
      },
      {
        type: 'checklist',
        title: 'Signs a task is a strong automation candidate',
        items: [
          'You do it at least weekly, often more',
          'The inputs are fairly consistent each time',
          'The quality of the output is not uniquely dependent on your personal judgement',
          'You often find yourself thinking "this again" when you start it',
          'You have clear, describable criteria for what good output looks like',
        ],
      },
      {
        type: 'text',
        heading: 'The three automation levels',
        body: "Level 1 — Prompt automation: A carefully crafted reusable prompt that you paste once and get 90% of the output done. Takes minutes to set up.\n\nLevel 2 — Template workflow: A structured sequence of prompts that walks through a multi-step process.\n\nLevel 3 — Tool chain: Connecting AI with actual tools so it can access real data, process it, and produce output without you stitching things together manually.\n\nStart at Level 1. Most people overestimate what complexity they need.",
      },
      {
        type: 'tip',
        title: 'Look for the Monday morning pattern',
        body: "What is the thing you do every Monday morning that takes time and follows roughly the same pattern each time? Recurrence patterns are usually your best starting points for automation.",
        variant: 'tip',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'Which of these is the strongest candidate for AI automation?',
        options: [
          { id: 'a', text: 'Writing the annual company strategy document', correct: false, explanation: 'Strategy documents require unique contextual judgement. Not a good automation candidate.' },
          { id: 'b', text: 'Generating the weekly status report from your notes', correct: true, explanation: 'Recurring weekly, consistent structure, input is your own notes, output format is predictable — a strong candidate.' },
          { id: 'c', text: 'Having a performance conversation with a team member', correct: false, explanation: 'Human relationships require human presence. Not an automation opportunity.' },
        ],
        correctExplanation: 'Exactly. Recurring, structured, consistent-input tasks are the best automation targets.',
        incorrectExplanation: 'Look for the task that is recurring, structured, and has consistent inputs.',
      },
      {
        type: 'takeaway',
        items: [
          'Knowledge workers spend 20–40% of their time on repetitive patterns — these are your targets',
          'Best candidates: high-frequency, consistent-input, describable-output tasks',
          'Three automation levels: prompt automation, template workflow, tool chain — start Level 1',
          'One well-automated high-frequency task can save 2–5 hours per week',
        ],
      },
      {
        type: 'recap',
        items: [
          'Automation works best on recurring, structured, consistent-input tasks',
          'Start Level 1 — reusable prompts often solve 80% of the value',
          'Next: building your first Level 1 automation workflow',
        ],
      },
    ],
  },

  'first-automation-workflow': {
    slug: 'first-automation-workflow',
    title: 'Building Your First Automation Workflow',
    pathTitle: 'AI Automation for Knowledge Workers',
    pathSlug: 'ai-automation-knowledge-workers',
    duration: '11 min',
    order: 2,
    totalInPath: 8,
    prevLesson: 'automation-mapping-intro',
    nextLesson: 'automation-path-quiz',
    type: 'practice',
    blocks: [
      {
        type: 'text',
        heading: 'From identified opportunity to working automation',
        body: "You have identified a task worth automating. Now you need to build the automation itself. For a Level 1 automation — a reusable prompt — this is simpler than most people expect. The design is the hard part; the building is straightforward.",
      },
      {
        type: 'checklist',
        title: 'Steps to build a Level 1 automation',
        items: [
          '1. Define the output clearly — what exactly does the completed task look like?',
          '2. Identify the variable inputs — what changes each time you run it? ([these become placeholders])',
          '3. Write the structured prompt using the Role/Context/Task/Constraints/Format framework',
          '4. Test it with three different real inputs',
          '5. Refine based on where the output fell short',
          '6. Save it where you will actually use it (Notion, Notes, prompt library)',
        ],
      },
      {
        type: 'example',
        label: 'Level 1 automation: meeting summary template',
        body: "Task: Convert rough meeting notes into a clean summary with action items.\n\nPrompt template:\n'Role: You are a clear, organized meeting note-taker.\nContext: I have just finished a meeting about [MEETING TOPIC] with [WHO WAS THERE].\nTask: Convert my rough notes into a clean meeting summary.\nConstraints: Under 300 words. Do not add information I have not provided. Use plain language.\nFormat: (1) Meeting purpose in one sentence, (2) Key decisions made, (3) Action items as a numbered list with owner and deadline if noted.\n\nHere are my rough notes: [PASTE NOTES]'\n\nVariable placeholders: [MEETING TOPIC], [WHO WAS THERE], [PASTE NOTES]\nTime to use: 3 minutes. Time saved: 15-20 minutes of writing.",
      },
      {
        type: 'tip',
        title: 'Test with your hardest example first',
        body: "When testing a new automation prompt, test it with the most complex, edge-case version of the task first — not the easiest one. If it handles the hard case, it will handle everything else. If it only handles the easy case, you will discover the failure at the worst possible moment.",
        variant: 'tip',
      },
      {
        type: 'practice',
        title: 'Build your first Level 1 automation',
        instruction: 'Take the highest-frequency repetitive task you identified in the previous lesson. Follow the six-step process above to build a Level 1 automation for it. Test it with three real examples and refine until it produces output you are satisfied with in at least 80% of cases.',
        prompt: 'Use this framework to build the prompt:\n"Role: [who should AI be?]\nContext: [situation description]\nTask: [what to do]\nConstraints: [what rules and limits apply?]\nFormat: [what should the output look like?]\n\n[PASTE YOUR VARIABLE INPUT]"',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You have built a weekly status report automation and tested it twice. Both times the output was good. What is the right next step?',
        options: [
          { id: 'a', text: 'Deploy it immediately for all future reports without further testing', correct: false, explanation: 'Two tests is not enough to rely on fully. Test with edge cases — unusual weeks, unexpected inputs — before fully committing.' },
          { id: 'b', text: 'Test with a difficult, edge-case week to see how it handles unusual inputs, then refine', correct: true, explanation: 'Correct. Edge case testing before full deployment prevents failures at important moments.' },
          { id: 'c', text: 'Delete the automation and build a more complex Level 2 workflow instead', correct: false, explanation: 'If Level 1 works reliably, there is no reason to add complexity. Level 2 is for tasks that Level 1 genuinely cannot handle.' },
        ],
        correctExplanation: 'Right. Edge case testing before full deployment is the disciplined approach.',
        incorrectExplanation: 'Think about what could go wrong if you only tested with ideal inputs.',
      },
      {
        type: 'takeaway',
        items: [
          'Six steps: define output, identify variables, write structured prompt, test three times, refine, save accessibly',
          'Variable inputs become [placeholders] — everything else is fixed prompt structure',
          'Test with your hardest example first — not your easiest',
          'An automation that works reliably in 80%+ of cases is valuable — do not let perfection block deployment',
        ],
      },
      {
        type: 'recap',
        items: [
          'Level 1 automation = reusable structured prompt with variable placeholders',
          'Build, test (hard cases first), refine, then save where you will actually use it',
          'Next: path review quiz',
        ],
      },
    ],
  },

  'automation-path-quiz': {
    slug: 'automation-path-quiz',
    title: 'AI Automation Path Review',
    pathTitle: 'AI Automation for Knowledge Workers',
    pathSlug: 'ai-automation-knowledge-workers',
    duration: '7 min',
    order: 8,
    totalInPath: 8,
    prevLesson: 'first-automation-workflow',
    nextLesson: null,
    type: 'quiz',
    blocks: [
      {
        type: 'text',
        heading: 'Review your automation foundations',
        body: "This quiz covers automation opportunity mapping, the three automation levels, and building your first Level 1 workflow.",
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'Which task characteristic is the strongest signal that it is worth automating?',
        options: [
          { id: 'a', text: 'The task is strategically important', correct: false, explanation: 'Strategic importance is not the automation signal. Repetition, consistent inputs, and describable output are.' },
          { id: 'b', text: 'It happens at least weekly with consistent inputs and a describable output format', correct: true, explanation: 'Correct. High frequency, consistent inputs, and a predictable output format are the three strongest automation signals.' },
          { id: 'c', text: 'The task is difficult and time-consuming', correct: false, explanation: 'Difficulty alone does not make something a good automation candidate. A difficult task with unique inputs each time may not automate well.' },
        ],
        correctExplanation: 'Right. Frequency, consistent inputs, and predictable output format define the best automation targets.',
        incorrectExplanation: 'Think about which characteristics make a task repeatable and therefore automatable.',
      },
      {
        type: 'quiz',
        variant: 'true-false',
        question: 'For most knowledge work automation, Level 3 (tool chain) is where you should start to get the most value.',
        options: [
          { id: 'true', text: 'True', correct: false, explanation: 'Level 1 (reusable prompts) delivers most of the value with minimal setup complexity. Start Level 1 and only go to Level 2 or 3 when Level 1 genuinely does not meet the need.' },
          { id: 'false', text: 'False', correct: true, explanation: 'Correct. Level 1 is where you should start. Most people overestimate the complexity they need.' },
        ],
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You have built a Level 1 automation for drafting client update emails. When testing it, what should you use as your first test case?',
        options: [
          { id: 'a', text: 'The simplest, most typical client update', correct: false, explanation: 'Easy cases give you false confidence. Hard cases expose the real failure modes.' },
          { id: 'b', text: 'The most complex or unusual client update you can find', correct: true, explanation: 'Correct. If the automation handles the hard case, it handles everything. If only the easy case works, you will discover failures at the worst moment.' },
          { id: 'c', text: 'A fictional case you make up to keep things simple', correct: false, explanation: 'Real cases expose real failure modes. Fictional cases may not reflect the actual variation in your work.' },
        ],
        correctExplanation: 'Right. Hard cases first — they surface the failure modes that matter.',
        incorrectExplanation: 'Think about what gives you the most confidence that an automation will work in the real world.',
      },
      {
        type: 'takeaway',
        items: [
          'Best automation targets: weekly frequency, consistent inputs, describable output format',
          'Three levels: prompt automation → template workflow → tool chain — start Level 1',
          'Build with structured prompts, variable [placeholders], test with hard cases, then save accessibly',
          'Level 1 automation often delivers 80% of the value with 10% of the complexity',
        ],
      },
      {
        type: 'recap',
        items: [
          'You have completed AI Automation for Knowledge Workers',
          'You can now identify, build, and deploy Level 1 automations for your most common tasks',
          'Recommended next: Practical AI Systems for Teams',
        ],
      },
    ],
  },

  // ============================================================
  // PATH: PRACTICAL AI SYSTEMS FOR TEAMS
  // ============================================================

  'team-ai-practices-intro': {
    slug: 'team-ai-practices-intro',
    title: 'Introducing AI Practices to Your Team',
    pathTitle: 'Practical AI Systems for Teams',
    pathSlug: 'practical-ai-systems-for-teams',
    duration: '11 min',
    order: 1,
    totalInPath: 8,
    prevLesson: null,
    nextLesson: 'building-shared-prompt-library',
    type: 'lesson',
    blocks: [
      {
        type: 'text',
        heading: 'Individual skill versus team practice',
        body: "When one person on a team becomes good at AI, they get individual productivity benefits. When a team builds shared AI practices, the benefits multiply — and become sustainable.\n\nThe difference is the shift from individual tools to shared systems. This is harder than personal skill-building because it involves other people, existing habits, and varying skill levels.",
      },
      {
        type: 'checklist',
        title: 'The five foundations of a successful team AI practice',
        items: [
          '1. A shared prompt library — documented templates anyone can use',
          '2. Quality standards — agreed guidelines for when AI output is ready to use',
          '3. Verification protocols — clear rules for what needs checking before using',
          '4. Training touchpoints — short regular moments for the team to share what is working',
          '5. A safe space for mistakes — permission to experiment and learn from what does not work',
        ],
      },
      {
        type: 'tip',
        title: 'Start with a willing pilot group',
        body: "The most effective team AI rollouts start with 2–4 enthusiastic early adopters who build the first examples of what good looks like. These become your templates, case studies, and advocates. Do not try to change the whole team at once.",
        variant: 'tip',
      },
      {
        type: 'text',
        heading: 'Handling resistance',
        body: "Resistance to AI in teams is normal and often well-founded. Common concerns and responses:\n\n'I am worried AI will take my job' — Address directly. AI in knowledge work extends human capability rather than replacing it.\n\n'I do not trust AI output to be accurate' — Good instinct. This is why quality standards and verification protocols exist.\n\n'I do not have time to learn this' — Start with one workflow they already find time-consuming. One saved hour per week is easier to justify than a whole new skill set.",
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'You are introducing AI practices to a team where several people are skeptical. What is the most effective first step?',
        options: [
          { id: 'a', text: 'Mandate that everyone starts using AI immediately', correct: false, explanation: 'Mandating without buy-in creates resistance, not adoption.' },
          { id: 'b', text: 'Start with 2–3 willing people, build a working example, and let results speak for the skeptics', correct: true, explanation: 'Correct. Evidence-based expansion is far more effective than mandates.' },
          { id: 'c', text: 'Wait until the whole team is ready before starting', correct: false, explanation: 'Waiting for universal readiness means never starting.' },
        ],
        correctExplanation: 'Right. Start small, build evidence, let results create the argument.',
        incorrectExplanation: 'Think about what creates genuine adoption versus surface compliance.',
      },
      {
        type: 'takeaway',
        items: [
          'Team AI practice creates compounding benefits that individual skills cannot',
          'Five foundations: shared prompts, quality standards, verification protocols, learning moments, safe experimentation',
          'Handle resistance by addressing concerns directly and starting with willing early adopters',
          'One workflow done well is worth more than five half-implemented tools',
        ],
      },
      {
        type: 'recap',
        items: [
          'Team AI practice = shared systems, not just shared tools',
          'Start with a willing pilot group, build evidence, expand based on results',
          'Next: building the shared prompt library your team will actually use',
        ],
      },
    ],
  },

  'building-shared-prompt-library': {
    slug: 'building-shared-prompt-library',
    title: 'Building a Shared Team Prompt Library',
    pathTitle: 'Practical AI Systems for Teams',
    pathSlug: 'practical-ai-systems-for-teams',
    duration: '10 min',
    order: 2,
    totalInPath: 8,
    prevLesson: 'team-ai-practices-intro',
    nextLesson: 'teams-path-quiz',
    type: 'practice',
    blocks: [
      {
        type: 'text',
        heading: 'The shared prompt library as team infrastructure',
        body: "A personal prompt library saves one person time. A team prompt library saves everyone time and — more importantly — creates consistent quality across all team members' AI-assisted work.\n\nWithout a shared library, each team member builds their own approach from scratch, quality varies wildly, and knowledge about what works stays siloed with individuals.",
      },
      {
        type: 'checklist',
        title: 'What a useful team prompt library contains',
        items: [
          'Templates for the team\'s most common recurring tasks',
          'Quality examples of what good output looks like for each template',
          'Notes on how to adapt each template for different situations',
          'Version history — so you can see what changed and why',
          'A clear owner for each template — someone responsible for keeping it current',
          'A way for any team member to suggest improvements',
        ],
      },
      {
        type: 'example',
        label: 'Good and bad team prompt library entries',
        weak: "Vague entry: 'Email templates — various prompts for emails.' No structure, no owner, no quality example.",
        strong: "Specific entry: 'Client project update email — Weekly template for updating clients on project status. Owner: [Name]. Last reviewed: [Date]. Template: [full structured prompt]. Example output: [paste good example]. Notes: Adjust [PROJECT STATUS] section based on current phase — see guidance below.'",
      },
      {
        type: 'tip',
        title: 'Start with 5 templates, not 50',
        body: "A team prompt library with 5 excellent, well-maintained templates that everyone uses beats a library of 50 templates that are out of date, inconsistent, and ignored. Start with the five tasks that consume the most team time and produce the highest-value output. Build outward from there.",
        variant: 'tip',
      },
      {
        type: 'practice',
        title: 'Build your team library starter',
        instruction: 'With your team or as a solo design exercise, identify the 5 tasks your team does most frequently that involve AI or could benefit from it. For each, write a complete template entry: task name, prompt template with [variable] placeholders, one good example output, and notes. Host it somewhere the whole team can access it.',
        prompt: 'Use AI to help: "My team frequently does these tasks: [list tasks]. Help me design a structured prompt library entry for [first task], including a well-structured prompt template with [VARIABLE] placeholders, guidance on when to use it, and what good output looks like."',
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'Your team prompt library has been running for 3 months. Several templates now feel outdated because your work has evolved. What is the right approach?',
        options: [
          { id: 'a', text: 'Archive the outdated templates and replace them with new ones', correct: false, explanation: 'Archiving removes the template and the history. Update in place with version notes — the history is valuable.' },
          { id: 'b', text: 'Update the templates with the template owner responsible for revisions and version notes', correct: true, explanation: 'Correct. Template owners maintain current templates, and version notes preserve the history of what changed and why.' },
          { id: 'c', text: 'Leave outdated templates in place to avoid confusion from frequent changes', correct: false, explanation: 'Outdated templates produce poor output that erodes trust in the library. Regular maintenance is essential.' },
        ],
        correctExplanation: 'Right. Owned templates with version history stay current and trustworthy.',
        incorrectExplanation: 'Think about what keeps a shared library reliable and trusted over time.',
      },
      {
        type: 'takeaway',
        items: [
          'A team prompt library creates consistent quality, not just individual convenience',
          'Good entries: specific template, example output, usage notes, clear owner, version history',
          'Start with 5 excellent templates, not 50 mediocre ones',
          'Template ownership ensures the library stays current as your work evolves',
        ],
      },
      {
        type: 'recap',
        items: [
          'Shared prompt library = team AI infrastructure, not just a collection of prompts',
          'Start small, assign owners, maintain actively',
          'Next: path review quiz',
        ],
      },
    ],
  },

  'teams-path-quiz': {
    slug: 'teams-path-quiz',
    title: 'AI Systems for Teams Path Review',
    pathTitle: 'Practical AI Systems for Teams',
    pathSlug: 'practical-ai-systems-for-teams',
    duration: '6 min',
    order: 8,
    totalInPath: 8,
    prevLesson: 'building-shared-prompt-library',
    nextLesson: null,
    type: 'quiz',
    blocks: [
      {
        type: 'text',
        heading: 'Review your team AI foundations',
        body: "This quiz covers introducing AI to a team and building the shared systems that make it sustainable.",
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'What is the most important difference between individual AI skill and team AI practice?',
        options: [
          { id: 'a', text: 'Individual skill is always faster to develop', correct: false, explanation: 'Speed of development is not the key distinction. The key difference is whether knowledge and quality remain siloed or become shared.' },
          { id: 'b', text: 'Team practice creates shared systems that produce consistent quality — individual skill stays siloed', correct: true, explanation: 'Correct. Shared systems make the benefits compounding and consistent, rather than dependent on one person.' },
          { id: 'c', text: 'Team practice requires a technical AI expert on staff', correct: false, explanation: 'No technical AI expertise is needed to build team prompt libraries and quality standards. These are practical knowledge work tools.' },
        ],
        correctExplanation: 'Right. Shared systems make benefits compounding and consistent — not siloed with individuals.',
        incorrectExplanation: 'Think about what changes when an organization has shared AI practices versus scattered individual skills.',
      },
      {
        type: 'quiz',
        variant: 'true-false',
        question: 'A team prompt library of 50 templates is always more valuable than one with 10 templates.',
        options: [
          { id: 'true', text: 'True', correct: false, explanation: 'False. An unused library of 50 templates produces no value. A well-maintained library of 10 templates everyone uses is far more valuable.' },
          { id: 'false', text: 'False', correct: true, explanation: 'Correct. Quality, active use, and regular maintenance matter far more than volume.' },
        ],
      },
      {
        type: 'quiz',
        variant: 'multiple-choice',
        question: 'Three months after launching a team prompt library, usage is dropping. What is the most likely cause?',
        options: [
          { id: 'a', text: 'The team does not believe in AI', correct: false, explanation: 'Low usage after an initial period is rarely about beliefs — it is usually about maintenance and accessibility.' },
          { id: 'b', text: 'The templates have become outdated as work evolved and there is no owner maintaining them', correct: true, explanation: 'Correct. Template libraries need active maintenance. Outdated templates produce poor output, and people stop trusting the library.' },
          { id: 'c', text: 'The library has too few templates', correct: false, explanation: 'Volume is rarely the problem. Currency and relevance are much more common drop-off causes.' },
        ],
        correctExplanation: 'Right. Outdated, unowned templates are the most common cause of library abandonment.',
        incorrectExplanation: 'Think about what makes a shared resource trustworthy and worth returning to.',
      },
      {
        type: 'takeaway',
        items: [
          'Team AI practice = shared systems, not just individual tools',
          'Five foundations: shared prompts, quality standards, verification, learning moments, safe experimentation',
          'Start with willing early adopters and a small, well-maintained library',
          'Template ownership and regular maintenance keep the library trustworthy over time',
        ],
      },
      {
        type: 'recap',
        items: [
          'You have completed Practical AI Systems for Teams',
          'You now have the foundation to build team-wide AI practices that stick',
          'The platform is fully complete — explore the full advanced library for continued learning',
        ],
      },
    ],
  },

};
