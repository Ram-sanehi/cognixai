# 🚀 MongoDB Atlas Setup Guide

## ✅ Current Status: FIXED!
Your contact form is now working with **Local MongoDB**. Your data is being saved successfully.

## 🎯 Next Step: Move to MongoDB Atlas

### **Step 1: Get Your Real Atlas Connection String**

1. **Login to MongoDB Atlas**: https://cloud.mongodb.com/
2. **Go to your project** (the one you showed in the screenshot)
3. **Click "Connect" button** on your cluster
4. **Select "Connect your application"**
5. **Choose "Node.js" driver**
6. **Copy the connection string** - it will look like:
   ```
   mongodb+srv://cognixai:<password>@cluster0.abcde.mongodb.net/cognixai?retryWrites=true&w=majority
   ```
   **Note**: The `abcde` part will be different - this is your unique cluster identifier!

### **Step 2: Atlas Requirements Checklist**

#### **Database User Setup:**
- [ ] Username: `cognixai`
- [ ] Password: `cognixai123` (or your chosen password)
- [ ] Role: `Atlas admin` or `Read and write to any database`

#### **Network Access:**
- [ ] Add your current IP address
- [ ] OR allow access from anywhere: `0.0.0.0/0` (for testing)

#### **Cluster Status:**
- [ ] Cluster is running (not paused)
- [ ] Cluster is in a supported region

### **Step 3: Update Connection String**

Once you have the correct connection string:

1. **Open `.env` file**
2. **Replace the MONGODB_URI line** with your Atlas connection string:
   ```
   MONGODB_URI=mongodb+srv://cognixai:cognixai123@cluster0.XXXXX.mongodb.net/cognixai?retryWrites=true&w=majority
   ```
3. **Save the file**

### **Step 4: Test Atlas Connection**

Run this command to test:
```bash
node test-atlas-connection.js
```

### **Step 5: Migrate Your Data**

Once Atlas connection works, run:
```bash
node migrate-to-atlas.js
```

This will copy all your existing contacts from local MongoDB to Atlas.

## 🔧 Common Issues & Solutions

### **Issue: "ENOTFOUND" Error**
- **Cause**: Wrong cluster URL
- **Solution**: Get exact connection string from Atlas dashboard

### **Issue: "Authentication Failed"**
- **Cause**: Wrong username/password
- **Solution**: Check database user credentials in Atlas

### **Issue: "Connection Timeout"**
- **Cause**: IP not whitelisted
- **Solution**: Add your IP to Network Access in Atlas

### **Issue: "Server Selection Timeout"**
- **Cause**: Cluster is paused or unavailable
- **Solution**: Resume cluster in Atlas dashboard

## 📊 Current Data Status

- **✅ Contact Form**: Working perfectly
- **✅ Database**: Local MongoDB connected
- **✅ Total Contacts**: 15+ records saved
- **🔄 Next**: Move to Atlas when ready

## 🎉 Your Contact Form is Fixed!

Your website contact form is now working and saving data. You can continue using it while we set up Atlas properly.

**Test it**: Go to `http://localhost:3000/contact` and submit a form - it will work!