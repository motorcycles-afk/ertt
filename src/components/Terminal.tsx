import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface Command {
  input: string;
  output: string[];
}

const Terminal: React.FC = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isRotating, setIsRotating] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commandResponses: Record<string, string[]> = {
    help: [
      'Available commands:',
      'ls - List directory contents',
      'uname -a - Print system information',
      'free -h - Display memory usage',
      'df -h - Show disk space',
      'uptime - Show system uptime',
      'clear - Clear the terminal',
      'neofetch - System information',
    ],
    ls: [
      'total 20',
      'drwxr-xr-x 2 root root 4096 Mar 15 12:34 .',
      'drwxr-xr-x 6 root root 4096 Mar 15 12:34 ..',
      '-rw-r--r-- 1 root root  220 Mar 15 12:34 .bash_logout',
      '-rw-r--r-- 1 root root 3526 Mar 15 12:34 .bashrc',
      '-rw-r--r-- 1 root root  807 Mar 15 12:34 .profile',
    ],
    'uname -a': [
      'Linux debian 6.1.0-18-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.67-1 (2024-01-31) x86_64 GNU/Linux',
    ],
    'free -h': [
      '               total        used        free      shared  buff/cache   available',
      'Mem:           1.0Gi       89Mi       756Mi       0.0Ki       178Mi       889Mi',
      'Swap:          1.0Gi          0B       1.0Gi',
    ],
    'df -h': [
      'Filesystem      Size  Used Avail Use% Mounted on',
      '/dev/vda1        10G  2.1G  7.4G  23% /',
      'tmpfs           497M     0  497M   0% /dev/shm',
      'tmpfs           199M  656K  198M   1% /run',
    ],
    uptime: [
      ' 12:34:56 up 2 days,  3:45,  1 user,  load average: 0.08, 0.03, 0.01',
    ],
    neofetch: [
      '       _,met$$$$$gg.           root@debian',
      '    ,g$$$$$$$$$$$$$$$P.        ---------------',
      '  ,g$$P"     """Y$$.".         OS: Debian GNU/Linux 12 (bookworm) x86_64',
      ' ,$$P\'              `$$$.      Kernel: 6.1.0-18-amd64',
      ',$$P       ,ggs.     `$$b:     Uptime: 2 days, 3 hours, 45 mins',
      '`d$$\'     ,$P"\'   .    $$$     Memory: 89MiB / 1024MiB',
      ' $$P      d$\'     ,    $$P     CPU: Intel(R) Xeon(R) @ 2.20GHz',
      ' $$:      $$.   -    ,d$$\'     Disk: 2.1G / 10G (23%)',
      ' $$;      Y$b._   _,d$P\'       IPv4: 185.xx.xx.xx',
      ' Y$$.    `.`"Y$$$$P"\'          ',
      ' `$$b      "-.__               ',
      '  `Y$$                         ',
      '   `Y$$.                       ',
      '     `$$b.                     ',
      '       `Y$$b.                  ',
      '          `"Y$b._              ',
      '              `"""             ',
    ],
    clear: [],
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let newCommands = [...commands];
    
    if (trimmedCmd === 'clear') {
      setCommands([]);
      return;
    }
    
    let output: string[] = [];
    if (trimmedCmd in commandResponses) {
      output = commandResponses[trimmedCmd];
    } else if (trimmedCmd) {
      output = [`bash: ${trimmedCmd}: command not found`];
    }
    
    newCommands.push({ input: cmd, output });
    setCommands(newCommands);
    setCurrentInput('');
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!terminalRef.current) return;
    
    const rect = terminalRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    
    setPosition({ x, y: -y });
    setLastInteraction(Date.now());
    setIsRotating(false);
  };

  useEffect(() => {
    if (!isRotating) {
      const timer = setTimeout(() => {
        if (Date.now() - lastInteraction > 3000) {
          setIsRotating(true);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }

    if (isRotating) {
      let angle = 0;
      const interval = setInterval(() => {
        angle += 0.02;
        setPosition({
          x: Math.sin(angle) * 5,
          y: Math.cos(angle) * 5,
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isRotating, lastInteraction]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
    }
  };

  useEffect(() => {
    setCommands([
      {
        input: '',
        output: [
          'Debian GNU/Linux 12 (bookworm)',
          'root@debian:~# neofetch',
          ...commandResponses.neofetch,
          '',
          'Type "help" to see available commands',
        ],
      },
    ]);
    
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div 
      className="relative mx-auto max-w-3xl w-full h-[400px] md:h-[500px] lg:h-[600px] perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTimeout(() => setIsRotating(true), 1000)}
    >
      <div 
        ref={terminalRef}
        className="terminal-container w-full h-full bg-black/80 backdrop-blur-md text-green-400 rounded-lg overflow-hidden p-4 shadow-[0_0_25px_rgba(0,255,128,0.2)] border border-green-500/30 transition-transform duration-200 cursor-pointer animate-pulse-glow"
        onClick={focusInput}
        style={{ 
          transform: `rotateX(${position.y}deg) rotateY(${position.x}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="terminal-header flex items-center justify-between mb-4 border-b border-green-500/30 pb-2 animate-float">
          <div className="flex items-center gap-2">
            <TerminalIcon size={18} />
            <span className="font-mono text-sm">root@debian:~#</span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        <div className="terminal-body h-[calc(100%-80px)] overflow-y-auto font-mono text-sm pb-4">
          {commands.map((cmd, i) => (
            <div key={i} className="mb-2 animate-fade-in">
              {cmd.input && (
                <div className="flex items-center text-white">
                  <span className="text-green-400 mr-1">root@debian:~#</span>
                  <span>{cmd.input}</span>
                </div>
              )}
              {cmd.output.map((line, j) => (
                <div key={j} className="text-green-300 ml-2">{line}</div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="terminal-input-line flex items-center font-mono text-sm">
          <span className="text-green-400 mr-1">root@debian:~#</span>
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full bg-transparent border-none outline-none text-white placeholder-green-700"
              placeholder="Type a command..."
            />
            <span className="absolute right-0 top-1 text-green-500 animate-pulse">
              ▍
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;