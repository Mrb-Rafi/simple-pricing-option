import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          "id": "basic_001",
          "name": "Basic",
          "price": 15.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free initial fitness assessment"
          ]
        },
        {
          "id": "standard_002",
          "name": "Standard",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room and sauna access",
            "Group fitness classes",
            "One personal training session per month"
          ]
        },
        {
          "id": "premium_003",
          "name": "Premium",
          "price": 49.99,
          "features": [
            "24/7 gym access",
            "Locker room, sauna, and steam room access",
            "Unlimited group fitness classes",
            "Weekly personal training sessions",
            "Nutritional guidance"
          ]
        },
        {
          "id": "vip_004",
          "name": "VIP",
          "price": 79.99,
          "features": [
            "24/7 gym access with priority entry",
            "Private locker room and VIP lounge access",
            "Unlimited group fitness and specialized classes",
            "Bi-weekly personal training sessions",
            "Custom nutrition and wellness plan",
            "Monthly fitness assessment and report"
          ]
        },
        {
          "id": "student_005",
          "name": "Student",
          "price": 19.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Group fitness classes",
            "Access to study lounge"
          ]
        },
        {
          "id": "family_006",
          "name": "Family",
          "price": 99.99,
          "features": [
            "Access for up to 4 family members",
            "Locker room and shared family space access",
            "Unlimited group fitness classes for all members",
            "Monthly family fitness assessment"
          ]
        },
        {
          "id": "corporate_007",
          "name": "Corporate",
          "price": 149.99,
          "features": [
            "Access for up to 10 employees",
            "24/7 gym access",
            "Dedicated locker area for corporate members",
            "Custom fitness and wellness workshops",
            "Quarterly team-building fitness events"
          ]
        }
      ];

    return (
        <div>
            <h2 className="text-5xl">Best Prices</h2>
            {
              priceOptions.map(option => <PriceOption key = {option.id} option = {option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;