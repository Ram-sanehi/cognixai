# MongoDB Atlas Setup Checklist ✅

## 🔧 Required Steps to Connect to MongoDB Atlas:

### **1. Cluster Status**
- [ ] ✅ Cluster is running (not paused)
- [ ] ✅ Cluster is accessible
- [ ] ✅ Cluster region is available

### **2. Database User**
- [ ] ✅ Database user exists (username: `cognixai`)
- [ ] ✅ Password is correct (`cognixai123`)
- [ ] ✅ User has read/write permissions
- [ ] ✅ User is not restricted to specific databases

### **3. Network Access**
- [ ] ✅ Your IP address is whitelisted
- [ ] ✅ Or "Allow access from anywhere" (0.0.0.0/0) is enabled
- [ ] ✅ No firewall blocking MongoDB ports

### **4. Connection String**
- [ ] ✅ Correct cluster URL (get from Atlas dashboard)
- [ ] ✅ Correct username and password
- [ ] ✅ Correct database name
- [ ] ✅ No typos in the connection string

### **5. Common Issues & Solutions:**

#### **Issue: ENOTFOUND Error**
- **Cause**: Incorrect cluster URL
- **Solution**: Get exact connection string from Atlas dashboard

#### **Issue: Authentication Failed**
- **Cause**: Wrong username/password
- **Solution**: Check database user credentials

#### **Issue: Connection Timeout**
- **Cause**: IP not whitelisted
- **Solution**: Add your IP to Atlas network access

## 🚀 How to Get Correct Connection String:

1. **Login to MongoDB Atlas**: https://cloud.mongodb.com/
2. **Go to your project**: Select your project
3. **Click on your cluster**: Find your cluster (Cluster0)
4. **Click "Connect"**: Green connect button
5. **Choose "Connect your application"**
6. **Select "Node.js" and version "4.1 or later"**
7. **Copy the connection string**
8. **Replace `<password>` with your actual password**

## 📝 Example Connection String Format:
```
mongodb+srv://cognixai:<password>@cluster0.xxxxx.mongodb.net/cognixai?retryWrites=true&w=majority
```

## 🔍 Test Connection:
Once you have the correct connection string, update the `.env` file and restart the server.

## 📊 After Connection Success:
Run the migration script to move your local data to Atlas:
```bash
node migrate-to-atlas.js
```