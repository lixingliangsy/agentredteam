export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "AgentRedTeam",
  slug: "agentredteam",
  priceMonthly: 79,
  checkoutUrl: "https://pancake.waffo.ai/store/lixingliang-ai-tools-6cilbw8v/checkout/cs_adc6780f-b929-b337-2e0a-9b0d283fcd03?utm_campaign=r11_launch&utm_content=agentredteam&utm_source=x&utm_medium=organic",
  tagline: "Break your AI agents before attackers do.",
  description: "AgentRedTeam runs automated adversarial simulations against your autonomous agents - prompt injection, tool abuse, data exfiltration - and delivers a prioritized vulnerability report so you can ship with confidence.",
  toolTitle: "AI Agent Red Team",
  resultLabel: "Threat Report",
  ctaLabel: "Run Test",
  features: [
  "Identify likely attack vectors against your agent",
  "Simulate prompt-injection and tool-abuse risks",
  "Score your agent's exploitability",
  "Get a prioritized hardening checklist"
],
  inputs: [
  {
    "key": "agent_description",
    "label": "Describe Your AI Agent",
    "type": "textarea",
    "placeholder": "e.g. A support agent with email and API access"
  },
  {
    "key": "capabilities",
    "label": "Agent Capabilities",
    "type": "text",
    "placeholder": "e.g. sends emails, calls APIs, browses web"
  },
  {
    "key": "threat_focus",
    "label": "Threat Focus",
    "type": "select",
    "options": [
      "Prompt injection",
      "Tool / function abuse",
      "Data exfiltration",
      "All"
    ]
  }
] as InputField[],
  systemPrompt: "You are Agent Red Team, an AI security expert who stress-tests autonomous AI agents. Given an agent description, its capabilities, and a threat focus, enumerate the most plausible attack vectors and assess how exploitable the agent is. Always structure your response as: (1) an exploitability score from 0-100, (2) the top 3 attack vectors each with a short example scenario, (3) the highest-impact risk, and (4) a prioritized hardening checklist. In demo (mock) mode, return a realistic sample assessment following exactly this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "Single basic probe"
  },
  {
    "tier": "Pro",
    "price": "$79/mo",
    "desc": "Full red-team suite + export"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const desc = (inputs['agent_description'] || '').trim()
  const caps = (inputs['capabilities'] || '').trim()
  const focus = inputs['threat_focus'] || 'All'
  if (!desc) return 'Describe your AI agent to run the red-team assessment.'
  const score = 71
  let out = 'AI AGENT RED-TEAM ASSESSMENT - ' + focus + '\n\n'
  out += 'Exploitability score: ' + score + '/100 (elevated)\n\n'
  out += 'Top 3 attack vectors:\n'
  out += '  1. Prompt injection via untrusted tool output re-purposes agent goals\n'
  out += '  2. Tool abuse: agent can send external email without confirmation\n'
  out += '  3. Data exfiltration: strips PII from memory into a public channel\n\n'
  out += 'Highest-impact risk: unconfirmed external sends (caps: ' + (caps || 'email/API') + ')\n\n'
  out += 'Prioritized hardening checklist:\n'
  out += '  - [ ] Require human approval for outbound actions\n'
  out += '  - [ ] Sanitize tool outputs before re-injection\n'
  out += '  - [ ] Add PII filters on memory reads\n'
  out += '\n--- (Mock demo. Pro unlocks full red-team suite + export.)'
  return out
}
}
