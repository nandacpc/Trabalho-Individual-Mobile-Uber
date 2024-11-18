import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Places } from "../../components/places/Places";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { SuggestionIcon } from "../../components/suggestionIcon/SuggestionIcon";
import { SuggestionCard } from "../../components/suggestionCard/SuggestionCard";
import { PlansCard } from "../../components/plansCard/PlansCard";
import { styles } from "./styles";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity style={[styles.tabs, styles.tabActive]}>
          <Image
            source={require("../../../assets/ride.png")}
            style={styles.tabIcon}
            resizeMode="contain"
          />
          <Text style={styles.navTextActive}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs}>
          <Image
            source={require("../../../assets/ride.png")}
            style={styles.tabIcon}
            resizeMode="contain"
          />
          <Text style={styles.navText}>Delivery</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.searchSection}>
          <View style={styles.inputContainer}>
            <View style={styles.inputView}>
              <Entypo name="magnifying-glass" size={24} color="black" />
              <TextInput
                value=""
                placeholder="Where to?"
                style={styles.input}
              />
            </View>
            <TouchableOpacity style={styles.nowButton}>
              <Ionicons name="time" size={18} color="black" />
              <Text style={styles.nowText}>Now &#9660;</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.placesSection}>
          <View style={styles.place}>
            <Text style={styles.placeIcon}>
              <MaterialIcons name="work" size={24} color="black" />
            </Text>
            <Places title={"Work"} adress={"1455 Market St"} />
          </View>
          <View style={styles.placesBorder}></View>
          <View style={styles.place}>
            <Text style={styles.placeIcon}>
              <Ionicons name="airplane" size={24} color="black" />
            </Text>
            <Places
              title={"San Francisco International Airport"}
              adress={"780 McDonnell Rd, San Frascico, California"}
            />
          </View>
        </View>
        <View style={styles.suggestionSection}>
          <View style={styles.suggestionTitle}>
            <Text style={styles.sectionTitle}>Suggestions</Text>
            <Text style={styles.sectionSeeAll}>See all</Text>
          </View>
          <View style={styles.suggestionIcons}>
            <SuggestionIcon
              title={"Ride"}
              image={require("../../../assets/ride.png")}
            />
            <SuggestionIcon
              title={"Package"}
              image={require("../../../assets/package.png")}
            />
            <SuggestionIcon
              title={"Reserve"}
              image={require("../../../assets/calendar.png")}
            />
            <SuggestionIcon
              title={"Rent"}
              image={require("../../../assets/rent.png")}
            />
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.plansSection}
        >
          <SuggestionCard
            title={"Pay less with up to 30% off"}
            image={require("../../../assets/ride.png")}
            description={"Order here!"}
            arrow={true}
          />
          <SuggestionCard
            title={"Verification with U-Code"}
            image={require("../../../assets/ride.png")}
            description={"Learn more"}
            arrow={true}
          />
          <SuggestionCard
            title={"Enjoy 10% Uber One credits"}
            image={require("../../../assets/ride.png")}
            description={"Get 2 months free"}
            arrow={true}
          />
          <SuggestionCard
            title={"Fast and secure delivery"}
            image={require("../../../assets/ride.png")}
            description={"Start now"}
            arrow={true}
          />
          <SuggestionCard
            title={"Travel on your schedule"}
            image={require("../../../assets/ride.png")}
            description={"Book a ride"}
            arrow={true}
          />
          <SuggestionCard
            title={"Travel in comfort"}
            image={require("../../../assets/ride.png")}
            description={"Uber Comfort"}
            arrow={true}
          />
          <SuggestionCard
            title={"Enjoy a luxury experience"}
            image={require("../../../assets/ride.png")}
            description={"Ride with Uber Black"}
            arrow={true}
          />
          <SuggestionCard
            title={"Discounts up to 10%"}
            image={require("../../../assets/ride.png")}
            description={"On groceries"}
            arrow={true}
          />
          <SuggestionCard
            title={"Discounts up to 10%"}
            image={require("../../../assets/ride.png")}
            description={"On groceries"}
            arrow={true}
          />
        </ScrollView>

        <View style={styles.plansSection}>
          <Text style={styles.sectionTitle}>Try Uber One for free</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PlansCard
              title={"More benefits for partner drivers"}
              image={require("../../../assets/uber02.png")}
              description={"Exceptional service on trips"}
              arrow={true}
            />
            <PlansCard
              title={"More benefits for partner drivers"}
              image={require("../../../assets/uber02.png")}
              description={"Exceptional service on trips"}
              arrow={true}
            />
            <PlansCard
              title={"More benefits for partner drivers"}
              image={require("../../../assets/uber02.png")}
              description={"Exceptional service on trips"}
              arrow={true}
            />
          </ScrollView>
        </View>
        <View style={styles.plansSection}>
          <Text style={styles.sectionTitle}>Travel smarter</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PlansCard
              title={"More benefits for partner drivers"}
              image={require("../../../assets/uber02.png")}
              description={"Exceptional service on trips"}
              arrow={true}
            />
            <PlansCard
              title={"More benefits for partner drivers"}
              image={require("../../../assets/uber02.png")}
              description={"Exceptional service on trips"}
              arrow={true}
            />
          </ScrollView>
        </View>
        <View style={styles.plansSection}>
          <Text style={styles.sectionTitle}>Ways to plan with Uber</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PlansCard
              title={"More benefits for partner drivers"}
              image={require("../../../assets/uber02.png")}
              description={"Exceptional service on trips"}
              arrow={true}
            />
            <PlansCard
              title={"More benefits for partner drivers"}
              image={require("../../../assets/uber02.png")}
              description={"Exceptional service on trips"}
              arrow={true}
            />
            <PlansCard
              title={"More benefits for partner drivers"}
              image={require("../../../assets/uber02.png")}
              description={"Exceptional service on trips"}
              arrow={true}
            />
            <PlansCard
              title={"More benefits for partner drivers"}
              image={require("../../../assets/uber02.png")}
              description={"Exceptional service on trips"}
              arrow={true}
            />
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon}>
          <Entypo name="home" size={24} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Fontisto name="nav-icon-grid" size={24} color="black" />
          <Text>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <FontAwesome6 name="receipt" size={24} color="black" />
          <Text>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
