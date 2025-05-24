import React from "react";
import { ScrollView, View, Text, Image, StyleSheet, ImageBackground } from "react-native";

export default function MusicScreen() {
  return (
    <View>
      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <Image source={require("./assets/apple.png")} style={styles.appleIcon} />
        <View style={styles.filterBar}>
          <Text style={[styles.filterButton, styles.activeFilter]}>All</Text>
          <Text style={styles.filterButton}>Music</Text>
          <Text style={styles.filterButton}>Podcasts</Text>
          <Text style={styles.filterButton}>Audiobooks</Text>
        </View>
      </View>
      <ScrollView>
        {/* Playlist Buttons */}
        <View style={styles.playlistButtonsSection}>
          <View style={styles.playlistButtonRow}>
            <View style={styles.button}>
              <Image source={require("./assets/music_note.jpeg")} style={styles.icon} />
              <Text style={styles.buttonTitle}>Hot Hits Canada</Text>
            </View>
            <View style={styles.button}>
              <Image source={require("./assets/music_note.jpeg")} style={styles.icon} />
              <Text style={styles.buttonTitle}>Pop Favourites</Text>
            </View>
          </View>
          <View style={styles.playlistButtonRow}>
            <View style={styles.button}>
              <Image source={require("./assets/music_note.jpeg")} style={styles.icon} />
              <Text style={styles.buttonTitle}>Hip-Hop Central</Text>
            </View>
            <View style={styles.button}>
              <Image source={require("./assets/music_note.jpeg")} style={styles.icon} />
              <Text style={styles.buttonTitle}>80s Hard Rock</Text>
            </View>
          </View>
          <View style={styles.playlistButtonRow}>
            <View style={styles.button}>
              <Image source={require("./assets/music_note.jpeg")} style={styles.icon} />
              <Text style={styles.buttonTitle}>Country</Text>
            </View>
            <View style={styles.button}>
              <Image source={require("./assets/music_note.jpeg")} style={styles.icon} />
              <Text style={styles.buttonTitle}>Upbeat mix</Text>
            </View>
          </View>
          <View style={styles.playlistButtonRow}>
            <View style={styles.button}>
              <Image source={require("./assets/music_note.jpeg")} style={styles.icon} />
              <Text style={styles.buttonTitle}>Daily Wellness</Text>
            </View>
            <View style={styles.button}>
              <Image source={require("./assets/music_note.jpeg")} style={styles.icon} />
              <Text style={styles.buttonTitle}>Release Radar</Text>
            </View>
          </View>
        </View>

        {/* Recents */}
        <Text style={styles.sectionTitle}>Recents</Text>
        <View style={styles.recentsGrid}>
          <View style={styles.card}>
            <ImageBackground
              source={require("./assets/playlist_placeholder.png")}
              style={styles.cardImage}
            >
              <View style={styles.overlay}>
                <Text style={styles.cardTitle}>Pop mix</Text>
              </View>
            </ImageBackground>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>Playlist</Text>
              <Text style={styles.infoText}>User 1</Text>
            </View>
          </View>
          <View style={styles.card}>
            <ImageBackground
              source={require("./assets/playlist_placeholder.png")}
              style={styles.cardImage}
            >
              <View style={styles.overlay}>
                <Text style={styles.cardTitle}>Hot Hits</Text>
              </View>
            </ImageBackground>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>Playlist</Text>
              <Text style={styles.infoText}>User 1</Text>
            </View>
          </View>
          <View style={styles.card}>
            <ImageBackground
              source={require("./assets/playlist_placeholder.png")}
              style={styles.cardImage}
            >
              <View style={styles.overlay}>
                <Text style={styles.cardTitle}>Upbeat Mix</Text>
              </View>
            </ImageBackground>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>Playlist</Text>
              <Text style={styles.infoText}>User 1</Text>
            </View>
          </View>
          <View style={styles.card}>
            <ImageBackground
              source={require("./assets/playlist_placeholder.png")}
              style={styles.cardImage}
            >
              <View style={styles.overlay}>
                <Text style={styles.cardTitle}>Daily Wellness</Text>
              </View>
            </ImageBackground>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>Playlist</Text>
              <Text style={styles.infoText}>User 1</Text>
            </View>
          </View>
          <View style={styles.card}>
            <ImageBackground
              source={require("./assets/playlist_placeholder.png")}
              style={styles.cardImage}
            >
              <View style={styles.overlay}>
                <Text style={styles.cardTitle}>Hip-Hop Central</Text>
              </View>
            </ImageBackground>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>Playlist</Text>
              <Text style={styles.infoText}>User 1</Text>
            </View>
          </View>
          <View style={styles.card}>
            <ImageBackground
              source={require("./assets/playlist_placeholder.png")}
              style={styles.cardImage}
            >
              <View style={styles.overlay}>
                <Text style={styles.cardTitle}>80s Hard Rock</Text>
              </View>
            </ImageBackground>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>Playlist</Text>
              <Text style={styles.infoText}>User 1</Text>
            </View>
          </View>
        </View>

        {/* Audiobooks */}
        <Text style={styles.sectionTitle}>Audiobooks for you</Text>
        <View style={styles.audiobooksGrid}>
          <View style={styles.audiobookCard}>
            <ImageBackground
              source={require("./assets/audiobook_icon.jpeg")}
              style={styles.audiobookImage}
            >
              <View style={styles.heartContainer}>
                <Image source={require("./assets/heart.jpg")} style={styles.heart} />
              </View>
            </ImageBackground>
            <View style={styles.audiobookInfoBar}>
              <Text style={styles.included}>Included in Premium</Text>
              <Text style={styles.audiobookTitle}>Mastering Conversation...</Text>
              <Text style={styles.audiobookAuthor}>Helen Stone</Text>
            </View>
          </View>
          <View style={styles.audiobookCard}>
            <ImageBackground
              source={require("./assets/audiobook_icon.jpeg")}
              style={styles.audiobookImage}
            >
              <View style={styles.heartContainer}>
                <Image source={require("./assets/heart.jpg")} style={styles.heart} />
              </View>
            </ImageBackground>
            <View style={styles.audiobookInfoBar}>
              <Text style={styles.included}>Included in Premium</Text>
              <Text style={styles.audiobookTitle}>Control your mind and...</Text>
              <Text style={styles.audiobookAuthor}>Eric Robertson</Text>
            </View>
          </View>
          <View style={styles.audiobookCard}>
            <ImageBackground
              source={require("./assets/audiobook_icon.jpeg")}
              style={styles.audiobookImage}
            >
              <View style={styles.heartContainer}>
                <Image source={require("./assets/heart.jpg")} style={styles.heart} />
              </View>
            </ImageBackground>
            <View style={styles.audiobookInfoBar}>
              <Text style={styles.included}>Included in Premium</Text>
              <Text style={styles.audiobookTitle}>Ikigai: The japanese sec...</Text>
              <Text style={styles.audiobookAuthor}>Hector Garcia</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000000",
    paddingHorizontal: 12,
    paddingTop: 50,
    paddingBottom: 8,
  },
  appleIcon: {
    width: 30,
    height: 30,
    marginRight: 12,
    marginLeft: 18,
    borderRadius: 14,
  },
  filterBar: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  filterButton: {
    backgroundColor: "#222222",
    color: "#ffffff",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 6,
    fontWeight: "bold",
    fontSize: 15,
  },
  activeFilter: {
    backgroundColor: "#2ecc71",
    color: "#000000",
  },
  playlistButtonsSection: {
    marginTop: 15,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  playlistButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#444444",
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 4,
    marginBottom: 0,
  },
  icon: {
    width: 36,
    height: 36,
    marginRight: 12,
  },
  buttonTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "300",
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  recentsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  card: {
    width: "30%",
    backgroundColor: "#444444",
    borderRadius: 8,
    marginBottom: 12,
  },
  cardImage: {
    width: "100%",
    height: 70,
    backgroundColor: "#6ec6f7",
    justifyContent: "flex-start",
  },
  overlay: {
    width: "100%",
    backgroundColor: "#00000080",
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginTop: 0,
  },
  cardTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#444444",
  },
  infoText: {
    color: "#cccccc",
    fontSize: 13,
  },
  audiobooksGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 32,
  },
  audiobookCard: {
    width: "47%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "column",
    alignItems: "center",
  },
  audiobookImage: {
    width: "100%",
    height: 100,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: 20,
  },
  heart: {
    width: 24,
    height: 24,
    borderRadius: 25,
  },
  audiobookInfoBar: {
    backgroundColor: "#444444",
    padding: 8,
    borderRadius: 12,
  },
  included: {
    color: "#1ed760",
    fontSize: 13,
    fontWeight: "bold",
  },
  audiobookTitle: {
    color: "#222222",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 2,
  },
  audiobookAuthor: {
    color: "#888888",
    fontSize: 13,
  },
});