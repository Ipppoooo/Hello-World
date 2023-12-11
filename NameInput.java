import javax.swing.JOptionPane;


public class NameInput {
    //input function
    public static String inputName(){
    String name = JOptionPane.showInputDialog("Enter Your Name:");
        if(name == null){
            System.out.println("You Cancelled the Input");
        }
        else
    {
       System.err.println(name);
    }
        return name;
       
    }
    // Function to recall a person's name
    public static void recallName(String name) {
        System.out.println("Hello, " + name + "! Nice to meet you.");
    }

    
    public static void main(String[] args) {

               String name=inputName();
                if(name!=null)
               {
                    recallName(name);
               }
                
    }


    @Override
    public String toString() {
        return "inputName []";
    }
}
