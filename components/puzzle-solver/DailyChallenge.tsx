'use client';

import React, { useState } from 'react';
import { Play, Check, Download, Info, ChevronDown, ChevronUp, Terminal, Copy, Clock, Award, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample daily challenge data
const dailyChallenge = {
  id: 'challenge-25042025',
  title: 'Balanced Brackets Detector',
  difficulty: 'Medium',
  category: 'Data Structures',
  points: 100,
  completionRate: 68,
  description: 'Write a function that determines if a string of brackets is balanced. A string is considered balanced if it has as many opening brackets of a certain type as it has closing brackets of that same type. There are 3 types of brackets: (), [], and {}.',
  examples: [
    { input: '([{}])', output: 'true', explanation: 'All brackets are properly nested and closed.' },
    { input: '[(])', output: 'false', explanation: 'The brackets are improperly nested.' },
    { input: '[]()', output: 'true', explanation: 'Brackets are properly closed and nested.' },
    { input: '{[}]', output: 'false', explanation: 'Brackets not properly closed in correct order.' },
  ],
  constraints: [
    'The input string will only contain the characters \\"(\\", \\")", \\"[\\", \\"]\\", \\"{\\", and \\"}\\".',
    'The length of the input string will be between 0 and 10,000.',
    'An empty string is considered balanced.',
  ],
  starterCode: {
    javascript: `/**
 * @param {string} s - A string containing only brackets: '(', ')', '[', ']', '{', '}'
 * @return {boolean} - Returns true if the string is balanced, false otherwise
 */
function isBalanced(s) {
  // Your solution here
  
}
`,
    python: `def is_balanced(s: str) -> bool:
    """
    Determine if a string of brackets is balanced.
    
    Args:
        s: A string containing only brackets: '(', ')', '[', ']', '{', '}'
        
    Returns:
        True if the string is balanced, False otherwise
    """
    # Your solution here
    
`,
    java: `/**
 * Determines if a string of brackets is balanced.
 * 
 * @param s A string containing only brackets: '(', ')', '[', ']', '{', '}'
 * @return true if the string is balanced, false otherwise
 */
public boolean isBalanced(String s) {
    // Your solution here
    
}
`,
  },
  hints: [
    'Consider using a stack data structure to keep track of opening brackets.',
    'When you encounter a closing bracket, check if it matches the most recent opening bracket.',
    'Be careful about the case where you encounter a closing bracket when the stack is empty.',
  ],
  timeLimit: '10 minutes',
};

const DailyChallenge = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState(dailyChallenge.starterCode.javascript);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  // Function to handle running the code
  const handleRunCode = () => {
    setIsRunning(true);
    setOutput('');
    
    // Simulate code execution with a delay
    setTimeout(() => {
      setIsRunning(false);
      setOutput(`
Running tests for Balanced Brackets Detector...

Test 1: isBalanced("([{}])") 
Expected: true
Output: true ✓

Test 2: isBalanced("[(])") 
Expected: false
Output: false ✓

Test 3: isBalanced("[]()") 
Expected: true
Output: true ✓

Test 4: isBalanced("{[}]") 
Expected: false
Output: false ✓

Test 5: isBalanced("") 
Expected: true
Output: true ✓

All tests passed!
      `);
    }, 2000);
  };
  
  // Function to handle submitting the solution
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate submission with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setHasSubmitted(true);
    }, 2500);
  };
  
  // Function to handle changing the programming language
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setCode(dailyChallenge.starterCode[language as keyof typeof dailyChallenge.starterCode]);
    setOutput('');
  };
  
  // Function to copy code to clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    // You could add a toast notification here
  };

  return (
    <div id="daily-challenge">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-obsidian-800 rounded-xl shadow-lg overflow-hidden border border-gray-800"
      >
        {/* Challenge header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                  dailyChallenge.difficulty === 'Easy' 
                    ? 'bg-green-900/30 text-green-400' 
                    : dailyChallenge.difficulty === 'Medium'
                    ? 'bg-yellow-900/30 text-yellow-400'
                    : 'bg-red-900/30 text-red-400'
                }`}>
                  {dailyChallenge.difficulty}
                </span>
                <span className="px-2 py-0.5 bg-purple-900/30 text-purple-400 text-xs font-medium rounded">
                  {dailyChallenge.category}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-1">{dailyChallenge.title}</h2>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Award size={16} className="mr-1 text-purple-400" />
                  <span>{dailyChallenge.points} points</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1 text-purple-400" />
                  <span>{dailyChallenge.timeLimit}</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="mr-1 text-purple-400" />
                  <span>{dailyChallenge.completionRate}% completion rate</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setShowHints(!showHints)}
                className="flex items-center px-3 py-1.5 text-sm rounded-lg border border-gray-700 bg-obsidian-900 hover:bg-obsidian-800 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Info size={16} className="mr-1.5" />
                {showHints ? 'Hide Hints' : 'Show Hints'}
              </button>
              <button 
                onClick={handleCopyCode}
                className="flex items-center px-3 py-1.5 text-sm rounded-lg border border-gray-700 bg-obsidian-900 hover:bg-obsidian-800 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Copy size={16} className="mr-1.5" />
                Copy Code
              </button>
              <button 
                onClick={() => {}}
                className="flex items-center px-3 py-1.5 text-sm rounded-lg border border-gray-700 bg-obsidian-900 hover:bg-obsidian-800 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Download size={16} className="mr-1.5" />
                Download
              </button>
            </div>
          </div>
        </div>
        
        {/* Problem description */}
        <div className="p-6 border-b border-gray-800 bg-obsidian-900/50">
          <h3 className="text-lg font-semibold text-white mb-3">Problem Description</h3>
          <p className="text-gray-300 mb-6">{dailyChallenge.description}</p>
          
          {/* Examples */}
          <div className="mb-6">
            <h4 className="text-md font-semibold text-white mb-3">Examples:</h4>
            <div className="space-y-4">
              {dailyChallenge.examples.map((example, index) => (
                <div key={index} className="bg-obsidian-800 p-4 rounded-lg border border-gray-800">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Input:</p>
                      <code className="text-sm text-green-400 font-mono">{example.input}</code>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Output:</p>
                      <code className="text-sm text-amber-400 font-mono">{example.output}</code>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Explanation:</p>
                      <p className="text-sm text-gray-300">{example.explanation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Constraints */}
          <div>
            <h4 className="text-md font-semibold text-white mb-3">Constraints:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {dailyChallenge.constraints.map((constraint, index) => (
                <li key={index} className="text-gray-300 text-sm">{constraint}</li>
              ))}
            </ul>
          </div>
          
          {/* Hints (collapsible) */}
          {showHints && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-4 bg-purple-900/20 border border-purple-700/30 rounded-lg"
            >
              <h4 className="text-md font-semibold text-white mb-3">Hints:</h4>
              <ul className="list-disc pl-5 space-y-2">
                {dailyChallenge.hints.map((hint, index) => (
                  <li key={index} className="text-gray-300 text-sm">{hint}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
        
        {/* Code editor section */}
        <div className="border-b border-gray-800">
          <div className="p-4 bg-obsidian-950/50 border-b border-gray-800 flex flex-wrap justify-between items-center gap-4">
            <div className="flex gap-2">
              <select
                value={selectedLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-obsidian-800 border border-gray-700 text-gray-300 text-sm rounded-lg py-1.5 px-3 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
              </select>
              
              <button
                onClick={() => {}}
                className="flex items-center px-3 py-1.5 text-sm rounded-lg bg-obsidian-800 hover:bg-obsidian-700 text-gray-300 transition-colors"
              >
                <RefreshCw size={16} className="mr-1.5" /> {/* Replaced Rotate with RefreshCw */}
                Reset Code
              </button>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="flex items-center px-3 py-1.5 text-sm rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors disabled:opacity-50 disabled:pointer-events-none"
              >
                {isRunning ? (
                  <>
                    <span className="animate-spin mr-1.5">
                      <RefreshCw size={16} /> {/* Replaced Rotate with RefreshCw */}
                    </span>
                    Running...
                  </>
                ) : (
                  <>
                    <Play size={16} className="mr-1.5" />
                    Run Code
                  </>
                )}
              </button>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || hasSubmitted}
                className={`flex items-center px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  hasSubmitted 
                    ? 'bg-green-600 text-white' 
                    : 'bg-amber-600 hover:bg-amber-500 text-white disabled:opacity-50 disabled:pointer-events-none'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-1.5">
                      <RefreshCw size={16} /> {/* Replaced Rotate with RefreshCw */}
                    </span>
                    Submitting...
                  </>
                ) : hasSubmitted ? (
                  <>
                    <Check size={16} className="mr-1.5" />
                    Submitted
                  </>
                ) : (
                  <>
                    <Check size={16} className="mr-1.5" />
                    Submit Solution
                  </>
                )}
              </button>
            </div>
          </div>
          
          {/* Code editor */}
          <div className="relative">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-obsidian-950 text-gray-300 font-mono text-sm p-6 min-h-[400px] focus:outline-none resize-y"
              spellCheck="false"
            />
            <div className="absolute top-2 right-2 text-xs text-gray-500 bg-obsidian-800 px-2 py-1 rounded">
              {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}
            </div>
          </div>
        </div>
        
        {/* Output console */}
        <div className="bg-obsidian-950 p-4">
          <div className="flex items-center border-b border-gray-800 pb-2 mb-3">
            <Terminal size={18} className="text-gray-400 mr-2" />
            <h3 className="text-gray-300 font-medium">Console Output</h3>
          </div>
          
          {output ? (
            <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap p-2">{output}</pre>
          ) : (
            <div className="text-sm text-gray-500 italic p-2">
              {isRunning ? 'Running your code...' : 'Run your code to see the output here'}
            </div>
          )}
        </div>
        
        {/* Submission status */}
        {hasSubmitted && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-green-900/20 border-t border-green-700/30"
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-600 rounded-full p-1.5">
                <Check size={16} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium">Challenge Completed!</h3>
                <p className="text-gray-300 text-sm">
                  You've earned 100 points for solving today's challenge. Keep up the great work!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
      
      {/* Related challenges */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-white mb-4">Related Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Monotonic Array Checker',
              difficulty: 'Easy',
              category: 'Arrays',
              points: 50,
            },
            {
              title: 'Merge Intervals',
              difficulty: 'Medium',
              category: 'Arrays',
              points: 75,
            },
            {
              title: 'Decode String',
              difficulty: 'Medium',
              category: 'Stacks',
              points: 100,
            }
          ].map((challenge, index) => (
            <div 
              key={index}
              className="bg-obsidian-800 rounded-lg p-4 border border-gray-800 hover:border-purple-500/50 cursor-pointer transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                  challenge.difficulty === 'Easy' 
                    ? 'bg-green-900/30 text-green-400' 
                    : challenge.difficulty === 'Medium'
                    ? 'bg-yellow-900/30 text-yellow-400'
                    : 'bg-red-900/30 text-red-400'
                }`}>
                  {challenge.difficulty}
                </span>
                <span className="px-2 py-0.5 bg-purple-900/30 text-purple-400 text-xs font-medium rounded">
                  {challenge.category}
                </span>
              </div>
              <h4 className="text-white font-medium mb-1">{challenge.title}</h4>
              <div className="flex items-center text-sm text-gray-400">
                <Award size={16} className="mr-1 text-purple-400" />
                <span>{challenge.points} points</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyChallenge;