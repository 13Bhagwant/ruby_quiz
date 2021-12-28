package com.dgl114.colormatch;
import java.util.Random;

import android.graphics.Color;

public class ColorMatchGame {
    public static final int NUM_ROWS = 3;
    public static final int NUM_COLS = 3;

    private boolean[][] mColors;

    public ColorMatchGame() {
        mColors = new boolean[NUM_ROWS][NUM_COLS];
    }

    public void newGame() {
        Random randomNumGenerator = new Random();
        for (int row = 0; row < NUM_ROWS; row++) {
            for (int col = 0; col < NUM_COLS; col++) {
                mColors[row][col] = randomNumGenerator.nextBoolean();
            }
        }
    }
    public boolean isColorSelected(int row, int col) {
        return mColors[row][col];
    }


    public void selectColor(int row, int col) {
        mColors[row][col] = !mColors[row][col];
        if (row > 0) {
            mColors[row - 1][col] = !mColors[row - 1][col];
        }
        if (row < NUM_ROWS - 1) {
            mColors[row + 1][col] = !mColors[row + 1][col];
        }
        if (col > 0) {
            mColors[row][col - 1] = !mColors[row][col - 1];
        }
        if (col < NUM_COLS - 1) {
            mColors[row][col + 1] = !mColors[row][col + 1];
        }
    }

    public boolean isGameOver() {
        for (int row = 0; row < NUM_ROWS; row++) {
            for (int col = 0; col < NUM_COLS; col++) {
                if (mColors[row][col]) {
                    return false;
                }
            }
        }
        return true;
    }
}
