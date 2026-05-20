// 1. Abstract class (Abstraction)
abstract class BankAccount {
    // Private data members (Encapsulation)
    private int accountNumber;
    private String accountHolderName;
    private double balance;

    // Constructor
    public BankAccount(int accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    // Getters and Setters for private variables (Encapsulation)
    public int getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    // Method to deposit money
    public void deposit(double amount) {
        System.out.println("Amount Deposited: " + amount);
        balance = balance + amount;
    }

    // Method to display account details
    public void displayDetails() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder Name: " + accountHolderName);
        System.out.println("Balance: " + balance);
    }

    // Abstract method to be implemented by subclasses
    abstract void calculateInterest();
}

// 2. Subclass 1 (Inheritance)
class SavingsAccount extends BankAccount {
    public SavingsAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    // Implementing the abstract method
    @Override
    void calculateInterest() {
        // 5% interest rate based on expected output
        double interest = getBalance() * 0.05; 
        System.out.println("Savings Account Interest: " + interest);
    }
}

// 3. Subclass 2 (Inheritance)
class CurrentAccount extends BankAccount {
    public CurrentAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    // Implementing the abstract method
    @Override
    void calculateInterest() {
        // 2% interest rate based on expected output
        double interest = getBalance() * 0.02; 
        System.out.println("Current Account Interest: " + interest);
    }
}

// 4. Main Class
public class Exp10 {
    public static void main(String[] args) {
        // Savings Account Operations
        System.out.println("----- Savings Account -----");
        // Initial balance is 10000 so that depositing 2000 makes it 12000
        SavingsAccount sa = new SavingsAccount(101, "Rahul", 10000.0);
        sa.deposit(2000.0);
        sa.displayDetails();
        sa.calculateInterest();

        System.out.println(); // Blank line for spacing

        // Current Account Operations
        System.out.println("----- Current Account -----");
        // Initial balance is 20000 so that depositing 3000 makes it 23000
        CurrentAccount ca = new CurrentAccount(102, "Anita", 20000.0);
        ca.deposit(3000.0);
        ca.displayDetails();
        ca.calculateInterest();
    }
}