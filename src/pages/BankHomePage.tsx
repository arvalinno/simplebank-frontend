import React, { useEffect, useState } from "react";
import {api} from "../api/api"; // Axios instance
import { useNavigate } from "react-router-dom";

interface Account {
  id: string;
  owner: string;
  currency: string;
  balance: number;
}

function BankHomePage() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [midtransToken, setMidtransToken] = useState<String>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // You can also change below url value to any script url you wish to load, 
    // for example this is snap.js for Sandbox Env (Note: remove `.sandbox` from url if you want to use production version)
    const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';  
  
    let scriptTag = document.createElement('script');
    scriptTag.src = midtransScriptUrl;
  
    // Optional: set script attribute, for example snap.js have data-client-key attribute 
    // (change the value according to your client-key)
    const myMidtransClientKey = 'SB-Mid-client-ztcNVgoshYhhdtam';
    scriptTag.setAttribute('data-client-key', myMidtransClientKey);
  
    document.body.appendChild(scriptTag);
  
    return () => {
      document.body.removeChild(scriptTag);
    }
  }, []);

  useEffect(() => {
    const fetchAccounts = async () => {
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
          console.error("No access token found, redirecting to login.");
          navigate("/login");
          return;
      }

      try {
          const response = await api.get(`/v1/list_accounts`, {
              headers: { Authorization: `Bearer ${accessToken}` },
              params: { page_id: 1, page_size: 4 },
          });

          console.log("Accounts:", response.data);
          setAccounts(response.data.accounts);
          setLoading(false);
      } catch (error) {
          console.error("Error fetching accounts:", error);
      }
    };

    fetchAccounts();
  }, []);

  const handleAddAccount = async () => {
    if (accounts.length >= 3) return;
    try {
      const response = await api.post("/v1/create_account");
      setAccounts([...accounts, response.data]);
    } catch (error) {
      console.error("Failed to add account:", error);
    }
  };

  const [showTopUp, setShowTopUp] = useState(false);
  const [amount, setAmount] = useState("");
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);

  const handleTopUp = async (accountId: string) => {
    try {
      const orderId = Math.floor(10000000 + Math.random() * 90000000).toString();
      const grossAmt = amount;
      const firstName = accounts[0].owner;
      const email = "arva@email.com"

      console.log("orderId : ", orderId);

      const response = await api.post("/v1/request_token", {orderId, grossAmt, firstName, email});
      setMidtransToken(response.data);
      window.snap.pay(response.data.token);
    } catch (error) {
      console.error("Failed to retrieve midtrans token: ", midtransToken);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
        Your Banking Dashboard
      </h1>

      {loading ? (
        <p className="text-lg text-gray-700">Loading accounts...</p>
      ) : accounts.length === 0 ? (
        <p className="text-lg text-gray-700">You don't have any accounts yet.</p>
      ) : (
        <div className="w-full max-w-md bg-white p-6 rounded-3xl shadow-xl border border-gray-200">
          {accounts.map((account) => (
            <div
              key={account.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-xl shadow-sm mb-3 transition hover:shadow-lg"
            >
              <div>
                <p className="text-xl font-semibold text-gray-900">{account.currency} {account.balance}</p>
              </div>
              <button
                onClick={() => {
                  setShowTopUp(true);
                  setSelectedAccountId(account.id);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow-md transition hover:bg-blue-600"
              >
                Top Up
              </button>
            </div>
          ))}
        </div>
      )}

      {showTopUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-bold">Top Up</h2>
            <input
              type="number"
              className="border p-2 w-full mt-2"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowTopUp(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  selectedAccountId && handleTopUp(selectedAccountId);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {accounts.length < 3 && (
        <button
          onClick={handleAddAccount}
          className="mt-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg text-lg font-semibold transition hover:bg-green-600"
        >
          + Add New Account
        </button>
      )}
    </div>

    
  );
};

export default BankHomePage;
