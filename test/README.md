# Big Number Names - Testing Guide

## TypeScript Bugs Found & Fixed

### 1. **Missing Type Annotations** (Line 15)
**Before:**
```typescript
const handleInputChange = (e) => {
```
**After:**
```typescript
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
```

### 2. **Type Mismatch - BigInt vs String** (Line 19)
**Before:**
```typescript
console.log(getName(e.target.value)); // ❌ string passed to function expecting bigint
```
**After:**
```typescript
if (inputValue && /^\d+$/.test(inputValue)) {
  console.log(getName(BigInt(inputValue))); // ✅ Properly converted to BigInt
}
```

### 3. **Null Safety Issue** (Line 38)
**Before:**
```typescript
const container = document.getElementById("root"); // Might be null
const root = createRoot(container);
```
**After:**
```typescript
const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}
const root = createRoot(container);
```

### 4. **CommonJS require() in TypeScript** (big-number-names.ts:2)
**Before:**
```typescript
const numberConverter = require("number-to-words"); // ❌ CommonJS in TypeScript
```
**After:**
```typescript
import * as numberConverter from "number-to-words"; // ✅ ES6 import
```

### 5. **Unused Imports** (Line 1)
**Before:**
```typescript
import React, { Component, useState, useEffect, useRef } from "react";
```
**After:**
```typescript
import React, { useState } from "react";
```

### 6. **Added Generic Type Parameters**
```typescript
const [value, setValue] = useState<string>("");
const [printedNumber, setPrintedNumber] = useState<string>("");
```

### 7. **Error Handling**
Added try-catch for graceful error handling when invalid input is provided.

---

## Running Tests

### Install Dependencies
```bash
npm install
```

### Run Tests
```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode (default for vitest)
npm test
```

### Test Structure

#### Function Tests (`test/big-number-names.test.ts`)
- ✅ `splitNumber()` - Splits numbers into groups of 3
- ✅ `getPowers()` - Returns powers of 1000
- ✅ `getName()` - Generates Latin names using Conway-Weschler algorithm
- ✅ `bigNumExp()` - Computes names for powers of 10
- ✅ `printNumber()` - Full number to English conversion

#### Component Tests (`test/BigNumberNames.component.test.tsx`)
- ✅ Rendering tests
- ✅ User interaction tests
- ✅ Input/output validation
- ✅ Error handling
- ✅ Integration with core functions
- ✅ Accessibility tests

---

## Why Vitest?

| Feature | Jest | Vitest |
|---------|------|--------|
| **Speed** | Slower | ⚡ Much faster |
| **TypeScript** | Needs ts-jest | Native support |
| **ESM** | Experimental | First-class |
| **Config** | Separate config | Uses Vite config |
| **HMR** | Basic | Instant |
| **API** | Jest API | Jest-compatible |

---

## Test Coverage

Run `npm run test:coverage` to see detailed coverage reports including:
- Line coverage
- Branch coverage
- Function coverage
- Statement coverage

Coverage reports are generated in:
- Terminal (text format)
- `coverage/index.html` (detailed HTML report)
