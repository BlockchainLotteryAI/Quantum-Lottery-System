import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class WalletAddressSaver {
    
    // Method to save wallet address to a file
    public static void saveWalletAddress(String walletAddress) {
        // Define the file name (you can change this)
        String fileName = "wallet_addresses.txt";
        
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true))) {
            // Get current date and time
            LocalDateTime now = LocalDateTime.now();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            String formattedDateTime = now.format(formatter);
            
            // Write the wallet address with timestamp to the file
            writer.write(formattedDateTime + " - " + walletAddress);
            writer.newLine();
            
            System.out.println("Wallet address saved successfully: " + walletAddress);
        } catch (IOException e) {
            System.err.println("Error saving wallet address: " + e.getMessage());
        }
    }
    
    // Main method for testing
    public static void main(String[] args) {
        // Test the function
        saveWalletAddress("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"); // Example Bitcoin address
    }
}
