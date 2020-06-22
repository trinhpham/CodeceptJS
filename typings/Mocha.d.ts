declare module Mocha {
  class SuiteRunnable {
    private _beforeEach;
    private _beforeAll;
    private _afterEach;
    private _afterAll;
    private _timeout;
    private _enableTimeouts;
    private _slow;
    private _bail;
    private _retries;
    private _onlyTests;
    private _onlySuites;
  
    constructor(title: string, parentContext?: Context);
  
    ctx: Context;
    suites: Suite[];
    tests: Test[];
    pending: boolean;
    file?: string;
    root: boolean;
    delayed: boolean;
    parent: Suite | undefined;
    title: string;
  
    /**
     * Create a new `Suite` with the given `title` and parent `Suite`. When a suite
     * with the same title is already present, that suite is returned to provide
     * nicer reporter and more flexible meta-testing.
     *
     * @see https://mochajs.org/api/mocha#.exports.create
     */
    static create(parent: Suite, title: string): Suite;
  
    /**
     * Return a clone of this `Suite`.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#clone
     */
    clone(): Suite;
  
    /**
     * Get timeout `ms`.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#timeout
     */
    timeout(): number;
  
    /**
     * Set timeout `ms` or short-hand such as "2s".
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#timeout
     */
    timeout(ms: string | number): this;
  
    /**
     * Get number of times to retry a failed test.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#retries
     */
    retries(): number;
  
    /**
     * Set number of times to retry a failed test.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#retries
     */
    retries(n: string | number): this;
  
    /**
     * Get whether timeouts are enabled.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#enableTimeouts
     */
    enableTimeouts(): boolean;
  
    /**
     * Set whether timeouts are `enabled`.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#enableTimeouts
     */
    enableTimeouts(enabled: boolean): this;
  
    /**
     * Get slow `ms`.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#slow
     */
    slow(): number;
  
    /**
     * Set slow `ms` or short-hand such as "2s".
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#slow
     */
    slow(ms: string | number): this;
  
    /**
     * Get whether to bail after first error.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#bail
     */
    bail(): boolean;
  
    /**
     * Set whether to bail after first error.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#bail
     */
    bail(bail: boolean): this;
  
    /**
     * Check if this suite or its parent suite is marked as pending.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#isPending
     */
    isPending(): boolean;
  
    /**
     * Run `fn(test[, done])` before running tests.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#beforeAll
     */
    beforeAll(fn?: Func): this;
  
    /**
     * Run `fn(test[, done])` before running tests.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#beforeAll
     */
    beforeAll(fn?: AsyncFunc): this;
  
    /**
     * Run `fn(test[, done])` before running tests.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#beforeAll
     */
    beforeAll(title: string, fn?: Func): this;
  
    /**
     * Run `fn(test[, done])` before running tests.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#beforeAll
     */
    beforeAll(title: string, fn?: AsyncFunc): this;
  
    /**
     * Run `fn(test[, done])` after running tests.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#afterAll
     */
    afterAll(fn?: Func): this;
  
    /**
     * Run `fn(test[, done])` after running tests.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#afterAll
     */
    afterAll(fn?: AsyncFunc): this;
  
    /**
     * Run `fn(test[, done])` after running tests.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#afterAll
     */
    afterAll(title: string, fn?: Func): this;
  
    /**
     * Run `fn(test[, done])` after running tests.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#afterAll
     */
    afterAll(title: string, fn?: AsyncFunc): this;
  
    /**
     * Run `fn(test[, done])` before each test case.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#beforeEach
     */
    beforeEach(fn?: Func): this;
  
    /**
     * Run `fn(test[, done])` before each test case.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#beforeEach
     */
    beforeEach(fn?: AsyncFunc): this;
  
    /**
     * Run `fn(test[, done])` before each test case.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#beforeEach
     */
    beforeEach(title: string, fn?: Func): this;
  
    /**
     * Run `fn(test[, done])` before each test case.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#beforeEach
     */
    beforeEach(title: string, fn?: AsyncFunc): this;
  
    /**
     * Run `fn(test[, done])` after each test case.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#afterEach
     */
    afterEach(fn?: Func): this;
  
    /**
     * Run `fn(test[, done])` after each test case.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#afterEach
     */
    afterEach(fn?: AsyncFunc): this;
  
    /**
     * Run `fn(test[, done])` after each test case.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#afterEach
     */
    afterEach(title: string, fn?: Func): this;
  
    /**
     * Run `fn(test[, done])` after each test case.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#afterEach
     */
    afterEach(title: string, fn?: AsyncFunc): this;
  
    /**
     * Add a test `suite`.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#addSuite
     */
    addSuite(suite: Suite): this;
  
    /**
     * Add a `test` to this suite.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#addTest
     */
    addTest(test: Test): this;
  
    /**
     * Return the full title generated by recursively concatenating the parent's
     * full title.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#.Suite#fullTitle
     */
    fullTitle(): string;
  
    /**
     * Return the title path generated by recursively concatenating the parent's
     * title path.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#.Suite#titlePath
     */
    titlePath(): string[];
  
    /**
     * Return the total number of tests.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#.Suite#total
     */
    total(): number;
  
    /**
     * Iterates through each suite recursively to find all tests. Applies a
     * function in the format `fn(test)`.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#eachTest
     */
    eachTest(fn: (test: Test) => void): this;
  
    /**
     * This will run the root suite if we happen to be running in delayed mode.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html#run
     */
    run(): void;
  
    /**
     * Generic hook-creator.
     */
    protected _createHook(title: string, fn?: Func | AsyncFunc): Hook;
  }

    /**
     * Initialize a new `Hook` with the given `title` and callback `fn`
     *
     * @see https://mochajs.org/api/Hook.html
     */
    class Hook extends Runnable {
      private _error;

      type: "hook";
      originalTitle?: string; // added by Runner

      /**
       * Get the test `err`.
       *
       * @see https://mochajs.org/api/Hook.html#error
       */
      error(): any;

      /**
       * Set the test `err`.
       *
       * @see https://mochajs.org/api/Hook.html#error
       */
      error(err: any): void;
  }

   /**
     * Initialize a new `Runnable` with the given `title` and callback `fn`.
     *
     * @see https://mochajs.org/api/Runnable.html
     */
    class Runnable {
      private _slow;
      private _enableTimeouts;
      private _retries;
      private _currentRetry;
      private _timeout;
      private _timeoutError;

      constructor(title: string, fn?: Func | AsyncFunc);

      title: string;
      fn: Func | AsyncFunc | undefined;
      body: string;
      async: boolean;
      sync: boolean;
      timedOut: boolean;
      pending: boolean;
      duration?: number;
      parent?: Suite;
      state?: "failed" | "passed";
      timer?: any;
      ctx?: Context;
      callback?: Done;
      allowUncaught?: boolean;
      file?: string;

      /**
       * Get test timeout.
       *
       * @see https://mochajs.org/api/Runnable.html#timeout
       */
      timeout(): number;

      /**
       * Set test timeout.
       *
       * @see https://mochajs.org/api/Runnable.html#timeout
       */
      timeout(ms: string | number): this;

      /**
       * Get test slowness threshold.
       *
       * @see https://mochajs.org/api/Runnable.html#slow
       */
      slow(): number;

      /**
       * Set test slowness threshold.
       *
       * @see https://mochajs.org/api/Runnable.html#slow
       */
      slow(ms: string | number): this;

      /**
       * Get whether timeouts are enabled.
       *
       * @see https://mochajs.org/api/Runnable.html#enableTimeouts
       */
      enableTimeouts(): boolean;

      /**
       * Set whether timeouts are enabled.
       *
       * @see https://mochajs.org/api/Runnable.html#enableTimeouts
       */
      enableTimeouts(enabled: boolean): this;

      /**
       * Halt and mark as pending.
       */
      skip(): never;

      /**
       * Check if this runnable or its parent suite is marked as pending.
       *
       * @see https://mochajs.org/api/Runnable.html#isPending
       */
      isPending(): boolean;

      /**
       * Return `true` if this Runnable has failed.
       */
      isFailed(): boolean;

      /**
       * Return `true` if this Runnable has passed.
       */
      isPassed(): boolean;

      /**
       * Set or get number of retries.
       *
       * @see https://mochajs.org/api/Runnable.html#retries
       */
      retries(): number;

      /**
       * Set or get number of retries.
       *
       * @see https://mochajs.org/api/Runnable.html#retries
       */
      retries(n: number): void;

      /**
       * Set or get current retry
       *
       * @see https://mochajs.org/api/Runnable.html#currentRetry
       */
      protected currentRetry(): number;

      /**
       * Set or get current retry
       *
       * @see https://mochajs.org/api/Runnable.html#currentRetry
       */
      protected currentRetry(n: number): void;

      /**
       * Return the full title generated by recursively concatenating the parent's full title.
       */
      fullTitle(): string;

      /**
       * Return the title path generated by concatenating the parent's title path with the title.
       */
      titlePath(): string[];

      /**
       * Clear the timeout.
       *
       * @see https://mochajs.org/api/Runnable.html#clearTimeout
       */
      clearTimeout(): void;

      /**
       * Inspect the runnable void of private properties.
       *
       * @see https://mochajs.org/api/Runnable.html#inspect
       */
      inspect(): string;

      /**
       * Reset the timeout.
       *
       * @see https://mochajs.org/api/Runnable.html#resetTimeout
       */
      resetTimeout(): void;

      /**
       * Get a list of whitelisted globals for this test run.
       *
       * @see https://mochajs.org/api/Runnable.html#globals
       */
      globals(): string[];

      /**
       * Set a list of whitelisted globals for this test run.
       *
       * @see https://mochajs.org/api/Runnable.html#globals
       */
      globals(globals: ReadonlyArray<string>): void;

      /**
       * Run the test and invoke `fn(err)`.
       *
       * @see https://mochajs.org/api/Runnable.html#run
       */
      run(fn: Done): void;
  }

  type Done = (err?: any) => void;

  /**
   * Callback function used for tests and hooks.
   */
  type Func = (this: Context, done: Done) => void;

  /**
   * Async callback function used for tests and hooks.
   */
  type AsyncFunc = (this: Context) => PromiseLike<any>;

  /**
     * Test context
     *
     * @see https://mochajs.org/api/module-Context.html#~Context
     */
    class Context {
      private _runnable;

      test?: Runnable;
      currentTest?: Test;

      /**
       * Get the context `Runnable`.
       */
      runnable(): Runnable;

      /**
       * Set the context `Runnable`.
       */
      runnable(runnable: Runnable): this;

      /**
       * Get test timeout.
       */
      timeout(): number;

      /**
       * Set test timeout.
       */
      timeout(ms: string | number): this;

      /**
       * Get whether timeouts are enabled.
       */
      enableTimeouts(): boolean;

      /**
       * Set whether timeouts are enabled.
       */
      enableTimeouts(enabled: boolean): this;

      /**
       * Get test slowness threshold.
       */
      slow(): number;

      /**
       * Set test slowness threshold.
       */
      slow(ms: string | number): this;

      /**
       * Mark a test as skipped.
       */
      skip(): never;

      /**
       * Get the number of allowed retries on failed tests.
       */
      retries(): number;

      /**
       * Set the number of allowed retries on failed tests.
       */
      retries(n: number): this;

      [key: string]: any;
  }
}