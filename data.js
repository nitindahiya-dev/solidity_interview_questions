const faqData = [
    // Easy (25 questions)
    {
        id: 1,
        question: "What is Solidity?",
        answer: "Solidity is a high-level, contract-oriented programming language designed for writing smart contracts on blockchain platforms like Ethereum. It is statically typed, supports inheritance, libraries, and complex user-defined types. Solidity enables developers to create decentralized applications (dApps) with self-executing code that runs on the Ethereum Virtual Machine (EVM). Its syntax is similar to JavaScript, making it accessible for developers building blockchain solutions.",
        difficulty: "Easy",
        topic: "Basics"
    },
    {
        id: 2,
        question: "What is a smart contract?",
        answer: "A smart contract is a self-executing program stored on a blockchain that automatically enforces the terms of an agreement when predefined conditions are met. Written in Solidity for Ethereum, it runs on the EVM, ensuring trustless, transparent execution without intermediaries. Smart contracts are immutable once deployed, enabling applications like DeFi, NFTs, and DAOs, with code determining outcomes like fund transfers or data updates.",
        difficulty: "Easy",
        topic: "Smart Contracts"
    },
    {
        id: 3,
        question: "What is the purpose of the `pragma` directive in Solidity?",
        answer: "The `pragma` directive in Solidity specifies the compiler version to use for the contract, ensuring compatibility and preventing issues from version mismatches. For example, `pragma solidity ^0.8.0;` restricts compilation to version 0.8.0 or higher but below 0.9.0. It’s placed at the top of the file and helps maintain consistent behavior across different compiler versions, enhancing code reliability and security.",
        difficulty: "Easy",
        topic: "Basics"
    },
    {
        id: 4,
        question: "What are the basic data types in Solidity?",
        answer: "Solidity supports several basic data types: `uint` (unsigned integers), `int` (signed integers), `address` (for Ethereum addresses), `bool` (true/false), `bytes` (fixed-size byte arrays), `string` (dynamic strings), and `fixed`/`ufixed` (fixed-point numbers). These types form the foundation for variables in smart contracts, enabling storage and manipulation of data like balances, flags, or user information, with specific use cases like `address` for wallet interactions.",
        difficulty: "Easy",
        topic: "Basics"
    },
    {
        id: 5,
        question: "What is the difference between `public` and `private` visibility in Solidity?",
        answer: "In Solidity, `public` functions or variables can be accessed from outside the contract and internally, automatically generating getter functions for public state variables. `Private` restricts access to within the contract only, preventing external calls or access by derived contracts. This visibility control enhances security by hiding sensitive logic or data, ensuring only authorized parts of the contract can interact with private elements, reducing attack surfaces.",
        difficulty: "Easy",
        topic: "Basics"
    },
    {
        id: 6,
        question: "What is the `msg.sender` in Solidity?",
        answer: "In Solidity, `msg.sender` is a global variable representing the address of the account or contract that called the current function. It’s commonly used to identify the caller for authentication, such as restricting function access to specific users (e.g., `require(msg.sender == owner);`). It’s critical for security in smart contracts, enabling features like ownership checks or user-specific actions in decentralized applications.",
        difficulty: "Easy",
        topic: "Smart Contracts"
    },
    {
        id: 7,
        question: "What is the `constructor` in a Solidity contract?",
        answer: "A `constructor` in Solidity is a special function executed only once during contract deployment to initialize state variables or set up contract logic. Defined with the `constructor` keyword, it cannot be called again after deployment. For example, it can set an owner address or initial token supply. It’s optional but crucial for ensuring the contract starts in a valid state, enhancing reliability and security.",
        difficulty: "Easy",
        topic: "Smart Contracts"
    },
    {
        id: 8,
        question: "What is the purpose of the `view` keyword in Solidity?",
        answer: "The `view` keyword in Solidity indicates that a function does not modify the blockchain state (e.g., changing variables or writing data). It’s used for read-only operations, like retrieving a variable’s value, and doesn’t consume gas when called externally. For example, `function getBalance() view returns (uint)` reads a balance without altering the contract. This optimizes gas usage and ensures state immutability for query functions.",
        difficulty: "Easy",
        topic: "Basics"
    },
    {
        id: 9,
        question: "What is `wei` in Solidity?",
        answer: "In Solidity, `wei` is the smallest unit of Ether, Ethereum’s native cryptocurrency (1 Ether = 10^18 wei). It’s used for precise calculations in smart contracts, especially for transactions or gas costs. For example, `msg.value` returns the amount of wei sent with a transaction. Using `wei` ensures accuracy in financial operations, avoiding floating-point errors in Ethereum’s integer-based arithmetic, critical for secure contract execution.",
        difficulty: "Easy",
        topic: "Basics"
    },
    {
        id: 10,
        question: "What is an event in Solidity?",
        answer: "Events in Solidity are used to log information to the blockchain, enabling external applications (e.g., dApps or frontends) to listen for specific contract activities. Defined with the `event` keyword, they’re emitted using `emit`. For example, `event Transfer(address from, address to, uint amount);` logs token transfers. Events are cost-efficient, stored in transaction logs, and help track contract state changes without modifying storage.",
        difficulty: "Easy",
        topic: "Events"
    },
    {
        id: 11,
        question: "What is the `require` function in Solidity?",
        answer: "The `require` function in Solidity enforces conditions in a contract, reverting the transaction if the condition fails. It takes a boolean expression and an optional error message, e.g., `require(msg.sender == owner, 'Not owner');`. Used for input validation or access control, it ensures the contract only proceeds with valid states, enhancing security by preventing unauthorized actions or invalid operations, with gas refunded for failed transactions.",
        difficulty: "Easy",
        topic: "Smart Contracts"
    },
    {
        id: 12,
        question: "What is the `address` type in Solidity?",
        answer: "The `address` type in Solidity stores a 20-byte Ethereum address, representing accounts or contracts. It supports methods like `.balance` to check Ether balance or `.transfer` to send Ether. For example, `address payable owner;` declares a payable address for transactions. It’s crucial for handling wallet interactions, access control, or fund transfers in smart contracts, ensuring secure and accurate addressing in blockchain operations.",
        difficulty: "Easy",
        topic: "Basics"
    },
    {
        id: 13,
        question: "What does the `payable` keyword do in Solidity?",
        answer: "The `payable` keyword in Solidity allows a function or address to receive Ether. For example, a `payable` function can accept Ether sent with a transaction (accessed via `msg.value`), and a `payable` address can receive Ether via `.transfer` or `.send`. It’s essential for contracts handling payments, like crowdfunding or marketplaces, ensuring they can process Ether transactions securely while maintaining proper fund management.",
        difficulty: "Easy",
        topic: "Smart Contracts"
    },
    {
        id: 14,
        question: "What is gas in Ethereum?",
        answer: "Gas in Ethereum is a unit measuring the computational effort required to execute operations, like running smart contracts or transactions. Each operation has a gas cost, paid in Ether, to compensate miners. Gas ensures efficient resource allocation and prevents infinite loops. Developers optimize contracts to reduce gas costs, enhancing user experience and affordability, with gas limits set to cap transaction complexity, ensuring network stability.",
        difficulty: "Easy",
        topic: "Gas Optimization"
    },
    {
        id: 15,
        question: "What is a fallback function in Solidity?",
        answer: "A fallback function in Solidity is an unnamed function with no arguments, executed when a contract receives Ether or a non-existent function is called. Declared as `function() external payable`, it’s often used to handle direct Ether transfers or custom logic. It must be lightweight due to a 2300 gas limit when triggered by `.send` or `.transfer`, ensuring minimal computation for security and efficiency in contract interactions.",
        difficulty: "Easy",
        topic: "Smart Contracts"
    },
    {
        id: 16,
        question: "What is the `mapping` data type in Solidity?",
        answer: "A `mapping` in Solidity is a key-value store, similar to a hash table, used to associate keys (e.g., `address` or `uint`) with values. For example, `mapping(address => uint) balances;` maps addresses to their balances. It’s efficient for lookups, stored in storage, and widely used in contracts for tracking data like token balances or user permissions, with all keys initialized to zero by default.",
        difficulty: "Easy",
        topic: "Basics"
    },
    {
        id: 17,
        question: "What is the `block.timestamp` in Solidity?",
        answer: "In Solidity, `block.timestamp` is a global variable returning the Unix timestamp (in seconds) of the current block’s creation time, set by the miner. It’s used for time-based logic, like scheduling events or deadlines in smart contracts. For example, `if (block.timestamp > deadline) { ... }`. However, it’s not perfectly precise, as miners can slightly manipulate timestamps, requiring caution in critical applications.",
        difficulty: "Easy",
        topic: "EVM"
    },
    {
        id: 18,
        question: "What is the `selfdestruct` function in Solidity?",
        answer: "The `selfdestruct` function in Solidity removes a contract from the blockchain, sending its remaining Ether to a specified address. Declared as `selfdestruct(address payable recipient);`, it’s used to decommission contracts, like after a project ends. It clears storage, freeing space, but should be used cautiously due to its irreversibility and potential security risks, such as forcing Ether to unintended recipients, requiring careful access control.",
        difficulty: "Easy",
        topic: "Smart Contracts"
    },
    {
        id: 19,
        question: "What is a struct in Solidity?",
        answer: "A `struct` in Solidity is a custom data type that groups multiple variables. For example, `struct User { address id; uint balance; }` defines a structure for user data. Structs are used to organize related data, like user profiles or transaction records, improving code readability and maintainability. They can be stored in storage or memory, commonly used in mappings or arrays for complex data management in contracts.",
        difficulty: "Easy",
        topic: "Basics"
    },
    {
        id: 20,
        question: "What is the `external` visibility in Solidity?",
        answer: "In Solidity, `external` visibility restricts a function to be called only from outside the contract, not internally by the contract itself or derived contracts. It’s useful for functions meant for external users or contracts, like token transfers. For example, `function transfer(address to, uint amount) external {}`. External functions can optimize gas usage by reducing internal call overhead, enhancing efficiency in public-facing contract interfaces.",
        difficulty: "Easy",
        topic: "Basics"
    },
    {
        id: 21,
        question: "What is the `uint256` type in Solidity?",
        answer: "In Solidity, `uint256` is an unsigned integer type that can store values from 0 to 2^256 - 1. It’s the most commonly used integer type due to its large range and compatibility with Ethereum’s 256-bit architecture. For example, `uint256 balance;` is used for token balances or calculations. It ensures precision in arithmetic operations and is preferred for gas efficiency and interoperability in smart contracts.",
        difficulty: "Easy",
        topic: "Basics"
    },
    {
        id: 22,
        question: "What is the `emit` keyword in Solidity?",
        answer: "The `emit` keyword in Solidity triggers an event, logging data to the blockchain’s transaction log. For example, `emit Transfer(msg.sender, to, amount);` logs a token transfer. Events are defined with the `event` keyword and are cost-effective for recording state changes, allowing dApps or off-chain applications to monitor contract activity without directly accessing storage, improving efficiency and enabling real-time updates for users.",
        difficulty: "Easy",
        topic: "Events"
    },
    {
        id: 23,
        question: "What is the `constant` keyword in Solidity?",
        answer: "In Solidity versions before 0.5.0, the `constant` keyword marked functions or variables as read-only, similar to `view` or `pure` for functions, and immutable for variables. It indicated no state modification, reducing gas costs for external calls. For example, `function getValue() constant returns (uint)` reads a variable. Post-0.5.0, it’s replaced by `view` or `pure` for functions, and `constant` is used sparingly for variables.",
        difficulty: "Easy",
        topic: "Basics"
    },
    {
        id: 24,
        question: "What is a modifier in Solidity?",
        answer: "A modifier in Solidity is a reusable piece of code that alters a function’s behavior, often used for access control or precondition checks. Defined with the `modifier` keyword, it’s applied using `_`. For example, `modifier onlyOwner { require(msg.sender == owner); _; }` ensures only the owner calls a function. Modifiers enhance code reusability, reduce duplication, and improve security by enforcing consistent checks across functions.",
        difficulty: "Easy",
        topic: "Smart Contracts"
    },
    {
        id: 25,
        question: "What is the `assert` function in Solidity?",
        answer: "The `assert` function in Solidity checks for conditions that should never be false, used for internal error checking. If the condition fails, it reverts the transaction and consumes all gas, indicating a critical bug. For example, `assert(balance >= 0);` ensures a balance isn’t negative. Unlike `require`, it’s for invariant checks, not user input validation, helping developers catch unexpected states during contract execution.",
        difficulty: "Easy",
        topic: "Smart Contracts"
    },

    // Medium (25 questions)
    {
        id: 26,
        question: "What is the difference between `storage` and `memory` in Solidity?",
        answer: "In Solidity, `storage` refers to persistent data on the blockchain, used for state variables, which are expensive to modify. `Memory` is temporary, used for function-local variables or parameters, and is cheaper as it’s cleared after execution. For example, `string memory temp = 'test';` uses memory, while `string public name;` uses storage. Choosing correctly optimizes gas costs and ensures efficient data handling in contracts.",
        difficulty: "Medium",
        topic: "Basics"
    },
    {
        id: 27,
        question: "How does inheritance work in Solidity?",
        answer: "Inheritance in Solidity allows a contract to inherit functions, state variables, and modifiers from a parent contract using the `is` keyword. For example, `contract Child is Parent {}` inherits `Parent`’s functionality. It supports single and multiple inheritance, enabling code reuse and modularity. Parent constructors must be initialized, and overriding functions requires the `virtual` and `override` keywords, ensuring flexibility while maintaining contract logic consistency and security.",
        difficulty: "Medium",
        topic: "Inheritance"
    },
    {
        id: 28,
        question: "What is the `pure` keyword in Solidity?",
        answer: "The `pure` keyword in Solidity marks a function that neither reads nor modifies blockchain state, ensuring no interaction with storage or global variables like `block.timestamp`. For example, `function add(uint a, uint b) pure returns (uint)` performs calculations without state access. Pure functions are gas-efficient, ideal for utility computations, and guarantee predictable outputs, enhancing contract security by avoiding unintended state interactions.",
        difficulty: "Medium",
        topic: "Basics"
    },
    {
        id: 29,
        question: "What is a reentrancy attack in Solidity?",
        answer: "A reentrancy attack in Solidity occurs when a malicious contract repeatedly calls a victim contract’s function before it completes execution, potentially draining funds. For example, an attacker exploits a `withdraw` function that sends Ether before updating the balance. To prevent this, use the Checks-Effects-Interactions pattern, update state before external calls, or use a reentrancy guard modifier to block recursive calls, ensuring secure contract execution.",
        difficulty: "Medium",
        topic: "Security"
    },
    {
        id: 30,
        question: "How does the `transfer` function work in Solidity?",
        answer: "The `transfer` function in Solidity sends Ether from a contract to a `payable` address, e.g., `recipient.transfer(amount);`. It has a fixed 2300 gas limit, reverting if the transfer fails (e.g., insufficient balance or gas). It’s safer than `send` as it ensures the transaction reverts on failure, preventing silent errors. However, it’s less flexible than `call` for complex interactions, making it suitable for simple Ether transfers.",
        difficulty: "Medium",
        topic: "Smart Contracts"
    },
    {
        id: 31,
        question: "What is the `keccak256` function in Solidity?",
        answer: "The `keccak256` function in Solidity is a cryptographic hash function that generates a 256-bit hash from input data. For example, `keccak256(abi.encodePacked('data'))` hashes a string. It’s used for data integrity, creating unique identifiers, or in commit-reveal schemes. It’s secure but computationally expensive, so it’s used sparingly. The function is pure, not accessing state, making it reliable for deterministic calculations in contracts.",
        difficulty: "Medium",
        topic: "Basics"
    },
    {
        id: 32,
        question: "What is the difference between `call`, `delegatecall`, and `staticcall` in Solidity?",
        answer: "In Solidity, `call` invokes a function on another contract, using the caller’s context for Ether and gas. `delegatecall` executes the target’s code in the caller’s storage context, useful for proxy patterns. `staticcall` is like `call` but read-only, enforcing no state changes. For example, `address(contract).call(abi.encodeWithSignature('func()'));` invokes a function. Each serves specific use cases, with `delegatecall` requiring caution to avoid storage conflicts.",
        difficulty: "Medium",
        topic: "Smart Contracts"
    },
    {
        id: 33,
        question: "What is the Checks-Effects-Interactions pattern in Solidity?",
        answer: "The Checks-Effects-Interactions pattern in Solidity is a security best practice to prevent reentrancy attacks. First, check conditions (e.g., `require` for valid inputs). Then, update state (effects) like balances. Finally, interact with external contracts (e.g., sending Ether). For example, in a `withdraw` function, verify balance, reduce it, then transfer Ether. This ensures state consistency before external calls, mitigating risks of recursive exploits in smart contracts.",
        difficulty: "Medium",
        topic: "Security"
    },
    {
        id: 34,
        question: "What is a library in Solidity?",
        answer: "A library in Solidity is a reusable contract with functions that other contracts can call, defined using the `library` keyword. It’s not deployed independently and cannot hold state or Ether. For example, `library Math { function add(uint a, uint b) pure returns (uint) { return a + b; } }` provides reusable math functions. Using `using Math for uint;` enables calling library functions on types, improving code modularity and gas efficiency.",
        difficulty: "Medium",
        topic: "Libraries"
    },
    {
        id: 35,
        question: "What is the `tx.origin` in Solidity?",
        answer: "In Solidity, `tx.origin` is a global variable returning the address of the account that initiated the transaction, unlike `msg.sender`, which is the immediate caller. For example, if a user calls contract A, which calls contract B, `tx.origin` is the user’s address in both. It’s risky for authentication, as malicious contracts can manipulate it, so `msg.sender` is preferred for secure access control in smart contracts.",
        difficulty: "Medium",
        topic: "Smart Contracts"
    },
    {
        id: 36,
        question: "What is the `block.number` in Solidity?",
        answer: "In Solidity, `block.number` is a global variable returning the current block’s number in the blockchain, representing its position in the chain. It’s used for logic tied to block progression, like vesting schedules or time-based triggers. For example, `if (block.number > startBlock) { ... }`. However, block numbers aren’t perfectly reliable for timing due to variable block times, requiring careful use in time-sensitive contract logic.",
        difficulty: "Medium",
        topic: "EVM"
    },
    {
        id: 37,
        question: "What is an interface in Solidity?",
        answer: "An interface in Solidity defines a contract’s function signatures without implementation, allowing interaction with external contracts. Declared with the `interface` keyword, it specifies functions and events, e.g., `interface IERC20 { function transfer(address to, uint amount) external; }`. Contracts use interfaces to call functions on other contracts without knowing their full code, enabling modularity, interoperability, and abstraction in dApps like token interactions.",
        difficulty: "Medium",
        topic: "Smart Contracts"
    },
    {
        id: 38,
        question: "What is the `revert` function in Solidity?",
        answer: "The `revert` function in Solidity halts execution and reverts the transaction, refunding remaining gas, with an optional error message, e.g., `revert('Invalid input');`. It’s used to handle errors or invalid conditions, similar to `require`, but offers more flexibility in custom error handling. Unlike `assert`, it’s for expected errors, not bugs, making it suitable for input validation or conditional checks in smart contracts.",
        difficulty: "Medium",
        topic: "Smart Contracts"
    },
    {
        id: 39,
        question: "What is the `virtual` keyword in Solidity?",
        answer: "The `virtual` keyword in Solidity marks a function or modifier in a parent contract as overridable by child contracts. For example, `function foo() virtual public {}` allows a derived contract to redefine `foo` using `override`. It’s used in inheritance to enable polymorphism, allowing child contracts to customize behavior while maintaining the parent’s interface, crucial for flexible and extensible smart contract designs like upgradable contracts.",
        difficulty: "Medium",
        topic: "Inheritance"
    },
    {
        id: 40,
        question: "What is gas optimization in Solidity?",
        answer: "Gas optimization in Solidity involves writing code to minimize the gas required for contract execution, reducing costs for users. Techniques include using `uint256` for efficiency, minimizing storage operations, using events instead of storage for logging, and avoiding loops. For example, replacing a storage variable update with a memory variable saves gas. Optimization improves user experience and contract scalability, critical for cost-effective deployment on Ethereum.",
        difficulty: "Medium",
        topic: "Gas Optimization"
    },
    {
        id: 41,
        question: "What is the `indexed` keyword in Solidity events?",
        answer: "The `indexed` keyword in Solidity events marks up to three event parameters for efficient filtering in logs. For example, `event Transfer(address indexed from, address indexed to, uint amount);` allows filtering by `from` or `to`. Indexed parameters are stored in the log’s topics, enabling off-chain applications to query events efficiently, reducing gas costs and improving dApp performance for tracking contract activities like token transfers.",
        difficulty: "Medium",
        topic: "Events"
    },
    {
        id: 42,
        question: "What is the `address(this)` in Solidity?",
        answer: "In Solidity, `address(this)` returns the current contract’s address as an `address` type. It’s used to interact with the contract itself, like checking its balance (`address(this).balance`) or passing its address to another contract. For example, `IERC20(token).transferFrom(address(this), to, amount);` uses it for token transfers. It’s essential for contract-to-contract interactions and managing contract-specific operations in decentralized applications.",
        difficulty: "Medium",
        topic: "Smart Contracts"
    },
    {
        id: 43,
        question: "What is the `blockhash` function in Solidity?",
        answer: "The `blockhash` function in Solidity returns the hash of a given block number, e.g., `blockhash(block.number - 1)`. It’s limited to the last 256 blocks for security, as older hashes aren’t stored. Used for verifying block data or in randomness (though not secure alone), it’s accessed via `block.blockhash`. Developers must ensure the block number is valid to avoid null results, critical for reliable contract logic.",
        difficulty: "Medium",
        topic: "EVM"
    },
    {
        id: 44,
        question: "What is the difference between `send` and `transfer` in Solidity?",
        answer: "In Solidity, both `send` and `transfer` send Ether to a `payable` address, but `transfer` reverts on failure with a 2300 gas limit, making it safer. `Send` returns a boolean and doesn’t revert, risking silent failures. For example, `recipient.transfer(amount);` ensures safety, while `recipient.send(amount);` needs error handling. `Transfer` is preferred for simplicity, but `call` is used for more flexibility in modern contracts.",
        difficulty: "Medium",
        topic: "Smart Contracts"
    },
    {
        id: 45,
        question: "What is a function modifier in Solidity?",
        answer: "A function modifier in Solidity is a reusable code block applied to functions to enforce conditions or add logic, defined with `modifier`. For example, `modifier onlyOwner { require(msg.sender == owner); _; }` restricts access. Applied as `function restricted() onlyOwner {}`, it runs before/after the function. Modifiers reduce code duplication, improve readability, and ensure consistent checks like ownership or state validation in smart contracts.",
        difficulty: "Medium",
        topic: "Smart Contracts"
    },
    {
        id: 46,
        question: "What is the `abi.encodePacked` function in Solidity?",
        answer: "The `abi.encodePacked` function in Solidity tightly packs multiple variables into a single byte array, minimizing padding for efficient hashing or data concatenation. For example, `keccak256(abi.encodePacked(address, uint))` creates a compact hash. Unlike `abi.encode`, it doesn’t add padding, making it gas-efficient but prone to collisions if types are ambiguous. It’s commonly used in signature verification or unique identifier generation in contracts.",
        difficulty: "Medium",
        topic: "Basics"
    },
    {
        id: 47,
        question: "What is an ERC20 token in Solidity?",
        answer: "An ERC20 token is a standard interface in Solidity for fungible tokens on Ethereum, defining functions like `transfer`, `approve`, `balanceOf`, and events like `Transfer`, `Approval`. It ensures interoperability across dApps, wallets, and exchanges. For example, `function transfer(address to, uint amount) external returns (bool);` enables token transfers. Implementing ERC20 allows contracts to manage token supply, transfers, and allowances, critical for DeFi and other applications.",
        difficulty: "Medium",
        topic: "DeFi"
    },
    {
        id: 48,
        question: "What is the `override` keyword in Solidity?",
        answer: "The `override` keyword in Solidity is used in a child contract to redefine a `virtual` function or modifier from a parent contract. For example, `function foo() public virtual override {}` overrides a parent’s `foo`. It ensures explicit intent to modify inherited behavior, maintaining contract integrity in inheritance chains. Required for polymorphism in upgradable contracts or complex inheritance, it prevents accidental function shadowing, enhancing code clarity.",
        difficulty: "Medium",
        topic: "Inheritance"
    },
    {
        id: 49,
        question: "What is the `now` keyword in Solidity?",
        answer: "In Solidity, `now` is an alias for `block.timestamp`, returning the current block’s Unix timestamp in seconds. It’s used for time-based logic, like `if (now > deadline) { ... }`. Deprecated in newer versions, `block.timestamp` is preferred for clarity. Miners can slightly manipulate it, so it’s unreliable for precise timing. Developers should use it cautiously in critical time-sensitive operations to avoid vulnerabilities.",
        difficulty: "Medium",
        topic: "EVM"
    },
    {
        id: 50,
        question: "What is the `msg.value` in Solidity?",
        answer: "In Solidity, `msg.value` is a global variable representing the amount of Ether (in wei) sent with a transaction. It’s only accessible in `payable` functions, e.g., `function deposit() payable { require(msg.value > 0); }`. Used for handling Ether payments, like in crowdfunding or auctions, it ensures accurate financial logic. Developers must validate `msg.value` to prevent errors or exploits in contracts managing Ether transactions.",
        difficulty: "Medium",
        topic: "Smart Contracts"
    },

    // Hard (25 questions)
    {
        id: 51,
        question: "How does the Ethereum Virtual Machine (EVM) execute Solidity code?",
        answer: "The EVM executes Solidity code by compiling it into bytecode, a low-level instruction set. Smart contracts are deployed as bytecode, which the EVM interprets in a stack-based architecture. Each operation (e.g., arithmetic, storage) consumes gas, tracked to prevent infinite loops. The EVM maintains state (storage, balances) and executes functions deterministically across nodes, ensuring consensus. Developers optimize bytecode for gas efficiency to reduce costs and improve performance.",
        difficulty: "Hard",
        topic: "EVM"
    },
    {
        id: 52,
        question: "What is a reentrancy guard in Solidity?",
        answer: "A reentrancy guard in Solidity prevents reentrancy attacks by locking a function during execution. Typically implemented as a modifier, e.g., `modifier nonReentrant { require(!locked); locked = true; _; locked = false; }`, it ensures a function can’t be re-entered before completion. Used in functions like `withdraw`, it prevents recursive calls that could drain funds, enhancing security by enforcing single execution, critical for safe Ether or token transfers.",
        difficulty: "Hard",
        topic: "Security"
    },
    {
        id: 53,
        question: "How does Solidity handle integer overflow and underflow?",
        answer: "In Solidity pre-0.8.0, integer overflow/underflow caused wraparound (e.g., `uint8(255) + 1 = 0`). Since 0.8.0, arithmetic operations include built-in checks that revert on overflow/underflow, improving security. For example, `uint256 a = type(uint256).max; a += 1;` reverts. Developers can use `unchecked { a += 1; }` to bypass checks for gas savings, but this risks vulnerabilities. SafeMath library was used pre-0.8.0 for explicit checks, now largely obsolete.",
        difficulty: "Hard",
        topic: "Security"
    },
    {
        id: 54,
        question: "What is the proxy pattern in Solidity?",
        answer: "The proxy pattern in Solidity separates a contract’s logic from its storage, using a proxy contract to delegate calls to an implementation contract via `delegatecall`. For example, `Proxy.sol` forwards calls to `Logic.sol`, allowing upgrades by changing the implementation address. It enables upgradability without changing the proxy’s address, preserving user interactions. However, storage layout must remain consistent to avoid data corruption, critical for upgradable dApps.",
        difficulty: "Hard",
        topic: "Upgradability"
    },
    {
        id: 55,
        question: "What is the difference between `public` and `external` functions in terms of gas usage?",
        answer: "In Solidity, `public` functions can be called internally and externally, generating a getter for state variables, which increases gas costs due to additional code. `External` functions are only callable externally, reducing gas by avoiding internal call overhead. For example, `function foo() external` is cheaper than `public` for external calls. Choosing `external` for user-facing functions optimizes gas, especially in contracts with frequent external interactions, improving efficiency.",
        difficulty: "Hard",
        topic: "Gas Optimization"
    },
    {
        id: 56,
        question: "What is the `delegatecall` function in Solidity?",
        answer: "The `delegatecall` function in Solidity executes another contract’s code in the caller’s storage context, preserving the caller’s state. For example, `address(target).delegatecall(abi.encodeWithSignature('func()'));` runs `func` using the caller’s storage. Used in proxy patterns for upgradability, it’s risky if storage layouts mismatch, causing data corruption. It’s gas-efficient but requires careful design to ensure compatibility, critical for modular and upgradable contract architectures.",
        difficulty: "Hard",
        topic: "Smart Contracts"
    },
    {
        id: 57,
        question: "What is the diamond pattern in Solidity?",
        answer: "The diamond pattern in Solidity (EIP-2535) is an advanced upgradability pattern where a single proxy contract delegates calls to multiple implementation contracts (facets) via `delegatecall`. Each facet handles specific functions, sharing the proxy’s storage. For example, a `Diamond` contract routes calls to `FacetA` or `FacetB`. It enables modular upgrades, scalability, and gas efficiency but requires careful storage management to avoid collisions, ideal for complex, upgradable dApps.",
        difficulty: "Hard",
        topic: "Upgradability"
    },
    {
        id: 58,
        question: "What is a flash loan attack in Solidity?",
        answer: "A flash loan attack in Solidity exploits uncollateralized loans (e.g., from Aave or Uniswap) to manipulate markets or drain funds. An attacker borrows funds, manipulates prices (e.g., in a DEX), and repays the loan in one transaction. Vulnerable contracts with weak checks (e.g., oracles) are targeted. Prevention includes using secure oracles, reentrancy guards, and limiting state changes during external calls, ensuring robust DeFi contract security.",
        difficulty: "Hard",
        topic: "Security"
    },
    {
        id: 59,
        question: "How does Solidity handle function overloading?",
        answer: "Solidity supports function overloading, allowing multiple functions with the same name but different parameter types or counts. For example, `function transfer(address to, uint amount)` and `function transfer(address to, uint amount, string memory note)` coexist. The compiler selects the correct function based on the call’s signature. Overloading enhances flexibility but requires unique signatures to avoid ambiguity, critical for clear and maintainable contract interfaces in complex dApps.",
        difficulty: "Hard",
        topic: "Smart Contracts"
    },
    {
        id: 60,
        question: "What is the `unchecked` keyword in Solidity?",
        answer: "Introduced in Solidity 0.8.0, the `unchecked` keyword disables overflow/underflow checks for arithmetic operations, saving gas. For example, `unchecked { uint a = 1; a--; }` allows underflow without reverting. It’s used when overflow is safe or intentional, but risky if misused, potentially causing vulnerabilities. Developers must ensure safety, as default checks since 0.8.0 protect against arithmetic errors, critical for secure contract design.",
        difficulty: "Hard",
        topic: "Gas Optimization"
    },
    {
        id: 61,
        question: "What is the role of an oracle in Solidity contracts?",
        answer: "Oracles in Solidity provide external data (e.g., price feeds, weather) to smart contracts, which cannot access off-chain data directly. For example, a Chainlink oracle supplies ETH/USD prices via `AggregatorV3Interface`. Contracts call oracle functions to fetch data, enabling DeFi or prediction markets. Security is critical, as manipulated oracles can cause financial losses, requiring trusted providers and fallback mechanisms to ensure reliable and tamper-proof data integration.",
        difficulty: "Hard",
        topic: "DeFi"
    },
    {
        id: 62,
        question: "What is the `receive` function in Solidity?",
        answer: "The `receive` function in Solidity, introduced in 0.6.0, handles plain Ether transfers to a contract when no data is sent. Declared as `receive() external payable { ... }`, it’s triggered by `send` or `transfer`. For example, `receive() { emit Received(msg.sender, msg.value); }` logs incoming Ether. It’s gas-limited (2300 gas), so it must be lightweight, ensuring safe and efficient handling of direct Ether deposits.",
        difficulty: "Hard",
        topic: "Smart Contracts"
    },
    {
        id: 63,
        question: "What is a storage collision in Solidity?",
        answer: "A storage collision in Solidity occurs when a proxy contract using `delegatecall` has a mismatched storage layout with its implementation contract, corrupting data. For example, if `Proxy.sol` stores `uint x` at slot 0, but `Implementation.sol` stores `address y` there, updates overwrite unintended data. Preventing collisions requires identical storage layouts, using tools like OpenZeppelin’s upgrades plugin, critical for safe upgradable contract designs.",
        difficulty: "Hard",
        topic: "Upgradability"
    },
    {
        id: 64,
        question: "What is the `immutable` keyword in Solidity?",
        answer: "The `immutable` keyword in Solidity, introduced in 0.6.5, marks state variables that are set once during contract deployment and cannot change afterward, unlike `constant`. For example, `address immutable owner;` is set in the constructor. It’s stored in the contract’s bytecode, saving gas compared to storage variables. Immutable variables improve security and efficiency, ideal for fixed values like owner addresses or configuration settings.",
        difficulty: "Hard",
        topic: "Gas Optimization"
    },
    {
        id: 65,
        question: "What is the `try/catch` statement in Solidity?",
        answer: "Introduced in Solidity 0.6.0, `try/catch` handles errors in external function calls or contract creation without reverting the entire transaction. For example, `try externalContract.call() returns (bool success) { ... } catch (bytes memory reason) { ... }` catches failures. It’s useful for robust error handling, like recovering from failed oracle calls, but only works for external calls, not internal errors, enhancing contract reliability in complex interactions.",
        difficulty: "Hard",
        topic: "Smart Contracts"
    },
    {
        id: 66,
        question: "What is an ERC721 token in Solidity?",
        answer: "An ERC721 token in Solidity is a standard for non-fungible tokens (NFTs) on Ethereum, where each token is unique. It defines functions like `ownerOf`, `transferFrom`, and events like `Transfer`. For example, `function ownerOf(uint tokenId) returns (address)` returns a token’s owner. Used for digital collectibles or assets, ERC721 ensures interoperability across platforms, requiring careful implementation to manage unique token IDs and ownership securely.",
        difficulty: "Hard",
        topic: "DeFi"
    },
    {
        id: 67,
        question: "How does Solidity handle multiple inheritance?",
        answer: "Solidity supports multiple inheritance using the `is` keyword, e.g., `contract C is A, B {}`. Functions are resolved using C3 linearization, prioritizing the rightmost parent. For example, if `A` and `B` have `foo`, `B`’s `foo` is used unless overridden. Constructors must be called explicitly, and `virtual`/`override` manage function conflicts. Careful design prevents the diamond problem, ensuring clear inheritance hierarchies in complex contracts.",
        difficulty: "Hard",
        topic: "Inheritance"
    },
    {
        id: 68,
        question: "What is a front-running attack in Solidity?",
        answer: "A front-running attack in Solidity exploits transaction ordering in Ethereum’s mempool. An attacker observes a pending transaction (e.g., a large DEX trade), submits a higher-gas transaction to execute first, profiting from price changes. For example, buying tokens before a large purchase. Prevention includes commit-reveal schemes, gas limits, or off-chain order matching, ensuring fair execution and protecting DeFi contracts from manipulation in public transaction pools.",
        difficulty: "Hard",
        topic: "Security"
    },
    {
        id: 69,
        question: "What is the `gasleft` function in Solidity?",
        answer: "The `gasleft` function in Solidity returns the remaining gas available in the current transaction, e.g., `uint gas = gasleft();`. It’s used to monitor gas consumption and prevent out-of-gas errors in complex operations, like loops. For example, `while (gasleft() > 10000) { ... }` ensures enough gas for completion. It’s critical for gas optimization and robust contract execution, especially in functions with variable computation costs.",
        difficulty: "Hard",
        topic: "Gas Optimization"
    },
    {
        id: 70,
        question: "What is the `fallback` function’s gas limit in Solidity?",
        answer: "In Solidity, the `fallback` function, when triggered by `.send` or `.transfer`, has a 2300 gas limit, sufficient for simple operations like logging an event or updating a balance. For example, `function() external payable { emit Received(msg.value); }`. Complex logic risks out-of-gas errors, so developers use `receive` or ensure minimal computation. This constraint ensures lightweight execution, critical for secure Ether handling in contracts.",
        difficulty: "Hard",
        topic: "Smart Contracts"
    },
    {
        id: 71,
        question: "What is a library’s `using for` directive in Solidity?",
        answer: "The `using for` directive in Solidity attaches library functions to a type, allowing calls as if they were methods. For example, `using SafeMath for uint256;` enables `uint256 a; a.add(b);` for safe arithmetic. It enhances readability and reusability, reducing code duplication. Libraries like SafeMath prevent overflow pre-0.8.0, and `using for` simplifies their integration, critical for secure and maintainable contract logic in complex dApps.",
        difficulty: "Hard",
        topic: "Libraries"
    },
    {
        id: 72,
        question: "What is the `block.difficulty` in Solidity?",
        answer: "In Solidity, `block.difficulty` returns the difficulty level of the current block, a measure of mining effort in Proof-of-Work (pre-Ethereum Merge). For example, `uint diff = block.difficulty;`. Used for randomness or chain-specific logic, it’s unreliable post-Merge (Proof-of-Stake) as difficulty is static. Developers must adapt to `block.prevrandao` for randomness, ensuring compatibility with Ethereum’s consensus changes in time-sensitive or random contract logic.",
        difficulty: "Hard",
        topic: "EVM"
    },
    {
        id: 73,
        question: "What is the `ecrecover` function in Solidity?",
        answer: "The `ecrecover` function in Solidity recovers the signer’s address from a signed message, used for signature verification. For example, `ecrecover(hash, v, r, s)` returns the address that signed `hash` with ECDSA components `v`, `r`, `s`. It’s critical for authentication in contracts, like verifying off-chain signatures in voting or access control, but requires secure hash generation to prevent replay attacks, ensuring robust security.",
        difficulty: "Hard",
        topic: "Security"
    },
    {
        id: 74,
        question: "What is an upgradable contract in Solidity?",
        answer: "An upgradable contract in Solidity allows logic updates without changing its address, using patterns like proxy or diamond. A proxy contract delegates calls to an implementation contract via `delegatecall`, upgradable by updating the implementation address. For example, OpenZeppelin’s `TransparentUpgradeableProxy` manages upgrades. Storage layout must remain consistent to avoid collisions, enabling bug fixes or feature additions while preserving user interactions, critical for long-term dApp maintenance.",
        difficulty: "Hard",
        topic: "Upgradability"
    },
    {
        id: 75,
        question: "What is the `sha256` function in Solidity?",
        answer: "The `sha256` function in Solidity computes a 256-bit SHA-2 hash of input data, e.g., `sha256(abi.encode('data'))`. It’s used for data integrity or generating unique identifiers, but it’s gas-intensive compared to `keccak256`. Less common in Ethereum due to `keccak256`’s prevalence, it’s still useful for compatibility with external systems. Developers must optimize its use to minimize gas costs in computationally heavy contract operations.",
        difficulty: "Hard",
        topic: "Basics"
    },

    // Super Hard (25 questions)
    {
        id: 76,
        question: "How does Solidity’s storage layout work for complex data types?",
        answer: "Solidity’s storage layout assigns state variables to 32-byte slots sequentially. Simple types like `uint256` occupy one slot, while mappings and arrays use dynamic slots with keccak256-based offsets. For example, `mapping(address => uint) balances` stores values at `keccak256(address, slot)`. Structs align fields contiguously, padding to 32 bytes. Understanding layout is critical for upgradability and `delegatecall`, as mismatches cause storage collisions, requiring careful design to maintain data integrity.",
        difficulty: "Super Hard",
        topic: "EVM"
    },
    {
        id: 77,
        question: "What is a double-spending attack in the context of Solidity?",
        answer: "A double-spending attack in Solidity involves exploiting contract logic to spend the same funds twice, often in DeFi. For example, an attacker manipulates a vulnerable `withdraw` function with reentrancy to drain funds before balance updates. Prevention requires the Checks-Effects-Interactions pattern, reentrancy guards, and secure state management. In token contracts, ensuring atomic updates and using non-reentrant modifiers prevents duplicate spending, critical for secure financial logic.",
        difficulty: "Super Hard",
        topic: "Security"
    },
    {
        id: 78,
        question: "How does Solidity handle gas estimation for complex transactions?",
        answer: "Solidity itself doesn’t handle gas estimation; the EVM calculates gas based on opcodes executed. Complex transactions (e.g., loops, storage writes) consume more gas, estimated by clients like ethers.js or Remix using static analysis or test runs. For example, a loop with `i++` risks high gas if unbounded. Developers use tools like Hardhat to simulate transactions, optimizing gas by minimizing storage operations and using efficient data structures.",
        difficulty: "Super Hard",
        topic: "Gas Optimization"
    },
    {
        id: 79,
        question: "What is the `CREATE2` opcode in Solidity?",
        answer: "The `CREATE2` opcode in Solidity deploys a contract at a deterministic address, calculated from the deployer’s address, a salt, and the contract’s bytecode hash, e.g., `new Contract{salt: salt}()`. Unlike `CREATE`, it allows predictable addresses before deployment, useful for counterfactual deployments or cross-chain interactions. For example, `address computed = address(uint160(uint(keccak256(abi.encodePacked(...))))));`. It’s critical for advanced patterns like minimal proxies or decentralized identity systems.",
        difficulty: "Super Hard",
        topic: "EVM"
    },
    {
        id: 80,
        question: "What is the minimal proxy pattern (EIP-1167) in Solidity?",
        answer: "The minimal proxy pattern (EIP-1167) in Solidity deploys lightweight proxy contracts that delegate calls to a master contract via `delegatecall`, reducing deployment gas. Each proxy shares the master’s logic but has its own storage. For example, `CREATE2` deploys proxies with a fixed 45-byte bytecode. It’s used for scalable token or NFT deployments, requiring identical storage layouts to avoid collisions, critical for cost-efficient, upgradable dApps.",
        difficulty: "Super Hard",
        topic: "Upgradability"
    },
    {
        id: 81,
        question: "What is a sandwich attack in DeFi Solidity contracts?",
        answer: "A sandwich attack in DeFi Solidity contracts exploits DEX trades by front-running and back-running a victim’s transaction. An attacker places a buy order before a large trade to raise the price, then sells after for profit, using high gas to reorder transactions. For example, manipulating Uniswap’s price curve. Prevention includes slippage protection, private mempools, or off-chain matching, ensuring fair pricing and secure trading in decentralized exchanges.",
        difficulty: "Super Hard",
        topic: "Security"
    },
    {
        id: 82,
        question: "How does Solidity implement ERC1155 tokens?",
        answer: "ERC1155 in Solidity is a multi-token standard supporting fungible and non-fungible tokens in one contract. It defines functions like `balanceOf(address, uint)` for token balances and `safeTransferFrom` for transfers, with events like `TransferSingle`. For example, `function safeTransferFrom(address from, address to, uint id, uint amount, bytes data)` handles transfers. It’s gas-efficient, supporting batch operations, ideal for games or platforms needing multiple token types, requiring careful implementation for security.",
        difficulty: "Super Hard",
        topic: "DeFi"
    },
    {
        id: 83,
        question: "What is the `transient` storage in Solidity?",
        answer: "Introduced in EIP-1153, `transient` storage in Solidity provides temporary storage cleared after each transaction, unlike persistent storage. Accessed via opcodes like `TSTORE`, it’s cheaper than regular storage, ideal for short-lived data like reentrancy flags. For example, `transient uint flag;` stores temporary state. It’s not yet standard in Solidity (post-0.8.24), but enhances gas efficiency for transient data, requiring careful use to avoid unintended persistence.",
        difficulty: "Super Hard",
        topic: "EVM"
    },
    {
        id: 84,
        question: "What is a governance attack in Solidity DAOs?",
        answer: "A governance attack in Solidity DAOs exploits voting mechanisms to manipulate outcomes, like proposal execution. For example, an attacker buys tokens to gain voting power, submits malicious proposals, or exploits flash loans for temporary control. Prevention includes timelocks, quorum thresholds, and vote-locking mechanisms. For example, `require(block.timestamp > proposal.endTime);` ensures voting periods. Robust design prevents token-based control grabs, critical for secure decentralized governance.",
        difficulty: "Super Hard",
        topic: "Security"
    },
    {
        id: 85,
        question: "How does Solidity handle inline assembly?",
        answer: "Solidity’s inline assembly allows low-level EVM operations using the `assembly { ... }` block. For example, `assembly { mstore(0, 1) }` writes to memory. It accesses opcodes like `ADD`, `MLOAD`, or `SSTORE`, enabling optimizations or features like custom math or direct storage manipulation. It’s powerful but error-prone, risking security if mishandled, requiring deep EVM knowledge for gas-efficient, safe contract logic in advanced use cases.",
        difficulty: "Super Hard",
        topic: "EVM"
    },
    {
        id: 86,
        question: "What is a proxy admin in upgradable Solidity contracts?",
        answer: "A proxy admin in upgradable Solidity contracts is a separate contract managing upgrades for a proxy, like updating the implementation address in a `TransparentUpgradeableProxy`. For example, OpenZeppelin’s `ProxyAdmin` calls `upgrade(address newImplementation)`. It restricts upgrade access to authorized accounts, enhancing security. Misuse risks unauthorized upgrades, so governance or multisig controls are critical, ensuring safe management of upgradable dApps while preserving user trust.",
        difficulty: "Super Hard",
        topic: "Upgradability"
    },
    {
        id: 87,
        question: "What is the `SSTORE` opcode in the context of Solidity?",
        answer: "The `SSTORE` opcode in Solidity’s EVM writes data to persistent storage, a costly operation (20,000 gas for non-zero writes, 5,000 for updates). For example, updating `uint public x; x = 1;` triggers `SSTORE`. Gas refunds apply for clearing storage (zeroing). Optimizing storage use, like packing variables or using memory, reduces costs. Understanding `SSTORE` is critical for gas-efficient contracts, especially in loops or frequent updates.",
        difficulty: "Super Hard",
        topic: "EVM"
    },
    {
        id: 88,
        question: "What is a timelock in Solidity governance contracts?",
        answer: "A timelock in Solidity governance contracts delays execution of proposals, giving users time to react (e.g., exit) if malicious. For example, `TimelockController` delays `execute` by `delay` seconds. Implemented as `require(block.timestamp >= proposal.executionTime);`, it enhances security by preventing instant malicious actions. Common in DAOs, it ensures transparency and trust, requiring careful configuration to balance responsiveness and safety in decentralized governance systems.",
        difficulty: "Super Hard",
        topic: "Security"
    },
    {
        id: 89,
        question: "What is the `CREATE` opcode in Solidity?",
        answer: "The `CREATE` opcode in Solidity deploys a new contract, returning its address, calculated as `keccak256(rlp([deployer_address, nonce]))`. For example, `new Contract()` triggers `CREATE`. It initializes the contract’s storage and executes its constructor. Gas costs depend on bytecode size and initialization complexity. Unlike `CREATE2`, addresses aren’t deterministic, requiring careful tracking for interactions, critical for dynamic contract creation in advanced dApp architectures.",
        difficulty: "Super Hard",
        topic: "EVM"
    },
    {
        id: 90,
        question: "What is a gas griefing attack in Solidity?",
        answer: "A gas griefing attack in Solidity exploits a contract’s dependency on external calls by consuming excessive gas, causing failures. For example, an attacker’s contract with a gas-heavy `fallback` function disrupts a multisig’s execution. Prevention includes setting gas limits on `call` (e.g., `call{gas: 100000}`), using pull-based withdrawals, or batching operations. Robust design ensures contracts handle limited gas gracefully, critical for secure multi-contract interactions in DeFi.",
        difficulty: "Super Hard",
        topic: "Security"
    },
    {
        id: 91,
        question: "What is the `extcodesize` check in Solidity?",
        answer: "The `extcodesize` check in Solidity uses the EVM’s `EXTCODESIZE` opcode to verify if an address is a contract by checking its code size (>0 for contracts). For example, `if (address(code).code.length > 0) { ... }` restricts calls to contracts. It’s used for security but can be bypassed during construction (code size is 0). Combining with other checks, like `tx.origin`, ensures robust contract-only restrictions in sensitive operations.",
        difficulty: "Super Hard",
        topic: "Security"
    },
    {
        id: 92,
        question: "How does Solidity implement gas-efficient loops?",
        answer: "Gas-efficient loops in Solidity minimize storage operations and use memory or cached variables. For example, instead of updating storage in a loop (`for (uint i = 0; i < array.length; i++) { storage[i] = 0; }`), cache `array.length` and use memory arrays. Unchecked arithmetic (`unchecked { i++ }`) saves gas since 0.8.0. Avoiding unbounded loops and using fixed-size types like `uint8` optimize gas, critical for scalable contracts.",
        difficulty: "Super Hard",
        topic: "Gas Optimization"
    },
    {
        id: 93,
        question: "What is the `DELEGATECALL` opcode’s risk in Solidity?",
        answer: "The `DELEG",
    difficulty: "Medium",
    topic: "Security"
},
{
        id: 94,
        question: "What is the impact of EIP-1559 on Solidity gas optimization?",
        answer: "EIP-1559, implemented in Ethereum’s London hard fork, introduced a base fee and optional tip for transactions, affecting gas costs. In Solidity, developers optimize by minimizing storage operations and using batch processing to leverage stable base fees. For example, grouping transfers in a single transaction reduces costs. Understanding dynamic gas pricing is crucial for efficient contract design, ensuring cost predictability and user affordability in high-throughput DeFi or NFT applications.",
        difficulty: "Super Hard",
        topic: "Gas Optimization"
    },
    {
        id: 95,
        question: "How does Solidity handle cross-contract reentrancy in complex systems?",
        answer: "Cross-contract reentrancy in Solidity occurs when multiple contracts call each other recursively, risking state inconsistencies. For example, contract A calls B, which re-enters A before state updates. Prevention uses reentrancy guards across all contracts, e.g., `nonReentrant` modifiers, and atomic state updates. Careful design with Checks-Effects-Interactions and limiting external calls ensures robust security, critical for interconnected DeFi systems where vulnerabilities can cascade across contracts.",
        difficulty: "Super Hard",
        topic: "Security"
    },
    {
        id: 96,
        question: "What is the role of `STATICCALL` opcode in Solidity?",
        answer: "The `STATICCALL` opcode in Solidity executes a read-only call to another contract, preventing state changes, used via `address.call{value: 0}()`. For example, `address(target).staticcall(abi.encodeWithSignature('get()'))` ensures no storage writes. It’s critical for secure queries in upgradable or multi-contract systems, reducing risks of unintended modifications. Developers must handle return data carefully, as `STATICCALL` reverts on state changes, ensuring integrity in complex dApp interactions.",
        difficulty: "Super Hard",
        topic: "EVM"
    },
    {
        id: 97,
        question: "How does Solidity implement EIP-2535 Diamond Standard upgrades?",
        answer: "EIP-2535 (Diamond Standard) in Solidity enables upgradable contracts via a proxy delegating to multiple facets using `delegatecall`. A `Diamond` contract stores facet addresses in a mapping, routing calls via a `fallback` function. For example, `DiamondCut` updates facets atomically. Storage layout consistency is critical to avoid collisions. This pattern maximizes modularity and scalability, ideal for complex dApps, requiring meticulous design to ensure secure, gas-efficient upgrades.",
        difficulty: "Super Hard",
        topic: "Upgradability"
    },
    {
        id: 98,
        question: "What is a signature replay attack in Solidity?",
        answer: "A signature replay attack in Solidity reuses a valid ECDSA signature to execute unauthorized transactions. For example, a signed `transfer` message is reused across contracts or chains. Prevention includes nonces (e.g., `mapping(address => uint) nonces`), chain ID checks, and domain separators in EIP-712 signatures. For example, `require(nonces[msg.sender]++ == nonce);` ensures one-time use. Robust validation is critical for secure off-chain signing in DeFi or governance.",
        difficulty: "Super Hard",
        topic: "Security"
    },
    {
        id: 99,
        question: "How does Solidity optimize storage packing for gas efficiency?",
        answer: "Solidity optimizes storage packing by aligning variables to fit within 32-byte slots, reducing `SSTORE` costs. For example, `uint128 a; uint128 b;` share one slot, costing less than separate slots. Packing structs like `struct Data { uint128 x; bool y; }` minimizes slots. Developers must avoid storage gaps and use smaller types (e.g., `uint8` for flags), critical for gas-efficient contracts in high-frequency DeFi or NFT applications.",
        difficulty: "Super Hard",
        topic: "Gas Optimization"
    },
    {
        id: 100,
        question: "What is the `SELFDESTRUCT` opcode’s impact on upgradable contracts?",
        answer: "The `SELFDESTRUCT` opcode in Solidity deletes a contract, transferring Ether to a specified address, but in upgradable contracts using proxies, it can break functionality. For example, a proxy’s `delegatecall` to a self-destructed implementation fails. EIP-6049 proposes deprecating it, so developers use `selfdestruct(address payable)` cautiously, ensuring governance controls and fallback implementations. This is critical for secure upgradability, preventing accidental data loss in complex dApp architectures.",
        difficulty: "Super Hard",
        topic: "Upgradability"
    }
];
