package snake;

import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.util.Random;
import java.util.Timer;

import javafx.animation.AnimationTimer;
import javafx.application.Application;
import javafx.application.Platform;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.scene.paint.Color;
import javafx.scene.shape.*;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class Main extends Application {
    
    private static final int Perferred_Width = 1200;
    private static final int Perferred_Height = 800;
    private static final int Radius = 5;
    final int x[] = new int[game_units];
    final int y[] = new int[game_units];
    char direction = 'R';
    boolean running = false;
    Timer timer;
    static int size = 10;
    static int speed = 5;
    static int score = 0;
    private static final int game_units = (Perferred_Width * Perferred_Height)/size;
    private Pane root;
    private Circle food;
    private Random random;
    private Rectangle SnakeHead;
    private Rectangle SnakeBody;
    private Polygon SnakeTail;


    private void newSnake() {

        int initialX = Perferred_Width / 2;
    int initialY = Perferred_Height / 2;

    // Initialize the snake at the center of the screen
    x[0] = initialX;
    y[0] = initialY;

        SnakeHead = new Rectangle(x[0], y[0], size, size);
        SnakeHead.setFill(Color.BLACK);

        SnakeBody = new Rectangle(SnakeHead.getX() + ( size * score) , SnakeHead.getY(), size, size);
        SnakeBody.setFill(Color.GRAY);

        SnakeTail = new Polygon(
            SnakeBody.getX() + SnakeBody.getWidth() / 2, SnakeBody.getY(),
            SnakeBody.getX(), SnakeBody.getY() + SnakeBody.getHeight(),
            SnakeBody.getX() + SnakeBody.getWidth(), SnakeBody.getY() + SnakeBody.getHeight()
        );
        SnakeTail.setFill(Color.GRAY);

        root.getChildren().addAll(SnakeHead, SnakeBody, SnakeTail);

    }

     private void newFood() {
        food = new Circle(random.nextInt(Perferred_Width), random.nextInt(Perferred_Height), Radius);
        food.setFill(Color.RED);
        root.getChildren().add(food);    
    }

    private void move() {

        for(int i = score; i>0; i--) {
            x[i] = x[i-1];
            y[i] = y[i-1];
        }

        switch(direction) {
            case 'U':
                y[0] = y[0] - game_units;
                break;
            case 'D':
                y[0] = y[0] + game_units;
                break;
            case 'L':
                x[0] = x[0] - game_units;
                break;
            case 'R': 
                x[0] = x[0] + game_units;
                break;
            
        }
    }

    public void checkApple() {

        double appleX = food.getLayoutX();
        double appleY = food.getLayoutY();

        if((x[0] == appleX) && (y[0] == appleY)) {
            score++;
            newFood();
        }
    }

    public void checkCollisions() {
        for (int i = 1; i < score; i++) {
            if (x[0] == x[i] && y[0] == y[i]) {
                running = false;
                break; // Exit the loop when a collision is found
            }
        }
    }
    

   public void startGame() {
    newFood();
    newSnake();
    running = true;

    AnimationTimer gameLoop = new AnimationTimer() {
        @Override
        public void handle(long now) {
            if (running) {
                move();
                checkApple();
                checkCollisions();
                newSnake(); // Make sure to redraw the snake in the game loop
            } else {
                
                Platform.runLater(() -> gameOver());
            }
        }
    };

    gameLoop.start();
}



public void gameOver() {
    running = false;
    
    Platform.runLater(() -> {
        root.getChildren().clear();
        
        Text gameOverText = new Text("Game Over");
        gameOverText.setFont(Font.font("Arial", FontWeight.BOLD, 48));
        gameOverText.setFill(Color.RED);
        gameOverText.setX(Perferred_Width / 2 - 100);
        gameOverText.setY(Perferred_Height / 2 - 24);
        
        Text scoreText = new Text("Score: " + score);
        scoreText.setFont(Font.font("Arial", FontWeight.BOLD, 24));
        scoreText.setFill(Color.BLUE);
        scoreText.setX(Perferred_Width / 2 - 40);
        scoreText.setY(Perferred_Height / 2 + 24);
        
        root.getChildren().addAll(gameOverText, scoreText);
    });
}


    @Override

    public void start(Stage primaryStage) throws Exception{
        root = new Pane();
        root.setPrefSize(Perferred_Width, Perferred_Height);
        random = new Random();

        startGame();

        primaryStage.setTitle("Snake");
        primaryStage.setScene(new Scene(root));
        primaryStage.setResizable(false);
        primaryStage.show();
    }


    public static void main(String[] args) {
        launch(args);
    }

    

    public class MyKeyAdapter extends KeyAdapter {
        @Override
        public void keyPressed(KeyEvent e) {

            switch(e.getKeyCode()){
                case KeyEvent.VK_LEFT:
                    if(direction != 'R'){
                        direction = 'L';
                    };
                    break;
                case KeyEvent.VK_RIGHT:
                    if(direction != 'L'){
                        direction = 'R';
                    };
                    break;
                case KeyEvent.VK_UP:
                    if(direction != 'D'){
                        direction = 'U';
                    };
                    break;
                case KeyEvent.VK_DOWN:
                    if(direction != 'U'){
                        direction = 'D';
                    };
                    break;
            }
        }
    }
}